const fs = require("node:fs");
const path = require("node:path");

function saveReport(filePath, text) {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, text, "utf-8");
}

module.exports = { saveReport };