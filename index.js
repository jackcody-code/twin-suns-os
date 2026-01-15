const { buildWeeklyReport } = require("./services/weeklyReportService");
const { formatWeeklyReport } = require("./services/reportFormatter");
const { exportWeeklyReport } = require("./services/weeklyReportExportService");

const baseDir = path.join(__dirname, "..", "data");
const weekly = exportWeeklyReport(baseDir, updated, { title: "Weekly Appointment Report" });

console.log("Saved weekly report to:", weekly.filePath);
