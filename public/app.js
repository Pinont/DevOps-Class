const API = "/api/users";

const form = document.getElementById("user-form");
const userIdInput = document.getElementById("user-id");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordHint = document.getElementById("password-hint");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const formTitle = document.getElementById("form-title");
const statusEl = document.getElementById("status");
const usersBody = document.getElementById("users-body");
const refreshBtn = document.getElementById("refresh-btn");

function setStatus(message, kind) {
  statusEl.textContent = message;
  statusEl.className = `status${kind ? ` ${kind}` : ""}`;
}

function resetForm() {
  form.reset();
  userIdInput.value = "";
  passwordInput.required = true;
  passwordHint.classList.add("hidden");
  cancelBtn.classList.add("hidden");
  formTitle.textContent = "Add user";
  submitBtn.textContent = "Create user";
}

async function request(path, options) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `Request failed (${response.status})`);
  }
  return data;
}

async function loadUsers() {
  usersBody.innerHTML = `<tr><td colspan="3">Loading…</td></tr>`;
  try {
    const users = await request(API);
    if (!Array.isArray(users) || users.length === 0) {
      usersBody.innerHTML = `<tr><td colspan="3">No users yet.</td></tr>`;
      return;
    }

    usersBody.innerHTML = users
      .map((user) => {
        const id = user._id;
        const username = escapeHtml(user.username || "");
        const email = escapeHtml(user.email || "");
        return `<tr>
          <td>${username}</td>
          <td>${email}</td>
          <td>
            <div class="row-actions">
              <button type="button" class="secondary" data-edit="${id}">Edit</button>
              <button type="button" class="danger" data-delete="${id}">Delete</button>
            </div>
          </td>
        </tr>`;
      })
      .join("");
  } catch (error) {
    usersBody.innerHTML = `<tr><td colspan="3">${escapeHtml(error.message)}</td></tr>`;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = userIdInput.value;
  const payload = {
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  if (!id || passwordInput.value) {
    payload.password = passwordInput.value;
  }

  try {
    if (id) {
      await request(`${API}/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      setStatus("User updated.", "ok");
    } else {
      await request(API, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setStatus("User created.", "ok");
    }
    resetForm();
    await loadUsers();
  } catch (error) {
    setStatus(error.message, "error");
  }
});

cancelBtn.addEventListener("click", () => {
  resetForm();
  setStatus("");
});

refreshBtn.addEventListener("click", () => {
  loadUsers();
});

usersBody.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const editId = target.dataset.edit;
  const deleteId = target.dataset.delete;

  if (editId) {
    try {
      const user = await request(`${API}/${editId}`);
      userIdInput.value = user._id;
      usernameInput.value = user.username || "";
      emailInput.value = user.email || "";
      passwordInput.value = "";
      passwordInput.required = false;
      passwordHint.classList.remove("hidden");
      cancelBtn.classList.remove("hidden");
      formTitle.textContent = "Edit user";
      submitBtn.textContent = "Save changes";
      setStatus("Editing user. Password is not shown.");
    } catch (error) {
      setStatus(error.message, "error");
    }
    return;
  }

  if (deleteId) {
    const confirmed = window.confirm("Delete this user?");
    if (!confirmed) {
      return;
    }
    try {
      await request(`${API}/${deleteId}`, { method: "DELETE" });
      if (userIdInput.value === deleteId) {
        resetForm();
      }
      setStatus("User deleted.", "ok");
      await loadUsers();
    } catch (error) {
      setStatus(error.message, "error");
    }
  }
});

resetForm();
loadUsers();
