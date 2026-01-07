const fs = require("node:fs");

function loadAppointments(filePath, config) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    throw new Error("appointments.json must contain an array");
  }

  const minimumPrice = Number(config?.minimumPrice ?? 0);

  return data.filter((appointment) => {
    const price = Number(appointment?.price);
    if (!Number.isFinite(price)) return false;
    return price >= minimumPrice;
  });
}

module.exports = { loadAppointments };
