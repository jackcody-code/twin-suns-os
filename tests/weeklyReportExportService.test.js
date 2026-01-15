const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { exportWeeklyReport } = require("../src/services/weeklyReportExportService");

test("exportWeeklyReport writes a weekly report file", () => {
    const baseDir = path.join(process.cwd(), "tests", "tmp-data");
    const appointments = [
        { price: 100, status: "completed" },
        { price: 200, status: "completed" },
        { price: 50, status: "canceled" }
    ];

    const fixedDate = new Date("2026-01-15T00:00:00.000Z");

    const { filePath, text } = exportWeeklyReport(baseDir, appointments, {
        title: "Weekly Appointment Report",
        date: fixedDate
    });

    assert.ok(fs.existsSync(filePath));
    assert.ok(text.includes("Total Revenue"));

    // cleanup
    fs.unlinkSync(filePath);
    fs.rmdirSync(path.dirname(filePath), { recursive: true });
});