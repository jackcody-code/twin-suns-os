const path = require("node:path");
const { buildWeeklyReport } = require("./weeklyReportService");
const { formatWeeklyReport } = require("./reportFormatter");
const { saveReport } = require("../data/saveReport");

function exportWeeklyReport(baseDir, appointments, options = {}) {
    const report = buildWeeklyReport(appointments, options);
    const text = formatWeeklyReport(report);

    const yyyyMmDd = (options.date || new Date()).toISOString().slice(0, 10);
    const filePath = path.join(baseDir, "reports", `weekly-report-${yyyyMmDd}.txt`);

    saveReport(filePath, text);

    return { filePath, text };
}

module.exports = { exportWeeklyReport };