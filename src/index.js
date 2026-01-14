const path = require("node:path");
const { loadAppointments } = require("./data/loadAppointments");
const {
  updateAndPersistAppointments,
} = require("./services/appointmentService");
const { APPOINTMENT_STATUS } = require("./domain/appointments");
const { saveDailyReport } = require("./services/reportService");
const baseDir = path.join(__dirname, "..", "data");
const { reportPath, text } = saveDailyReport(baseDir, updated);

console.log("\n" + text);
console.log("Saved report to:", reportPath);

const DATA_PATH = path.join(__dirname, "..", "data", "appointments.json");

// Load existing appointments
const appointments = loadAppointments(DATA_PATH, { minimumPrice: 0 });

// Update one appointment (example: id = 1 → confirmed)
const updated = updateAndPersistAppointments(
  DATA_PATH,
  appointments,
  1,
  APPOINTMENT_STATUS.CONFIRMED
);

// Summary output
console.log("Daily Appointment Update");
console.log("------------------------");
console.log("Total appointments:", updated.length);
console.log(
  "Confirmed:",
  updated.filter((a) => a.status === APPOINTMENT_STATUS.CONFIRMED).length
);
