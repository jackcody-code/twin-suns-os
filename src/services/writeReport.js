const fs = require("node:fs");

function writeDailyReport(filePath, reportText) {
    fs.writeFileSync(filePath, reportText, "utf-8");
}

module.exports = { writeDailyReport };