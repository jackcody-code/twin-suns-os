const fs = require("node:fs");
const { isValidAppointment, validateAppointmentsArray } = require("../validators/appointments");

function loadAppointments(filePath, config) {
  let raw;
  let data;

  try {
    raw = fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Failed to read appointments file: ${filePath}`);
  }

  try {
    data = JSON.parse(raw);
  } catch (err) {
    throw new Error("appointments.json contains invalid JSON");
  }

  validateAppointmentsArray(data);

  const minimumPrice = Number(config?.minimumPrice ?? 0);

  return data
    .filter(isValidAppointment)
    .filter((appointment) => {
      const price = Number(appointment?.price);
      if (!Number.isFinite(price)) return false;
      return price >= minimumPrice;
    });
}

module.exports = { loadAppointments };
