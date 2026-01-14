function buildDailyReport(appointments, options = {}) {
  const {
    title = "Daily Appointment Report",
    includeStatuses = true,
  } = options;
const { APPOINTMENT_STATUS } = require("../domain/appointments");

  const total = appointments.length;

  const counts = {
    requested: appointments.filter((a) => a.status === APPOINTMENT_STATUS.REQUESTED).length,
    confirmed: appointments.filter((a) => a.status === APPOINTMENT_STATUS.CONFIRMED).length,
    completed: appointments.filter((a) => a.status === APPOINTMENT_STATUS.COMPLETED).length,
    canceled: appointments.filter((a) => a.status === APPOINTMENT_STATUS.CANCELED).length,
  };

  const lines = [
    title,
    "-".repeat(title.length),
    `Total: ${total}`,
  ];

  if (includeStatuses) {
    lines.push(
      `Requested: ${counts.requested}`,
      `Confirmed: ${counts.confirmed}`,
      `Completed: ${counts.completed}`,
      `Canceled: ${counts.canceled}`
    );
  }

  lines.push("");

  return lines.join("\n");
}
function saveDailyReport(reportText, filePath) {
  const fs = require("node:fs");
  fs.writeFileSync(filePath, reportText, "utf-8");
}

module.exports = {
  buildDailyReport,
  saveDailyReport,
};
