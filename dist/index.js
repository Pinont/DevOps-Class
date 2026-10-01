"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const app = express();
exports.app = app;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}
