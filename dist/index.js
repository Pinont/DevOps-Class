"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
if ((0, fs_1.existsSync)('.env')) {
    process.loadEnvFile('.env');
}
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
if (!mongoUsername || !mongoPassword) {
    throw new Error('MONGO_USERNAME and MONGO_PASSWORD must be set');
}
const mongoUri = `mongodb+srv://${encodeURIComponent(mongoUsername)}:${encodeURIComponent(mongoPassword)}@cluster0.pstr1gz.mongodb.net/?appName=Cluster0`;
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/users", UserRoutes_1.default);
mongoose_1.default.connect(mongoUri)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Error connecting to MongoDB", err);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
