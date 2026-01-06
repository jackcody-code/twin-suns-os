const fs = require("node:fs");

function loadAppointments(filePath) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);

    if (!Array.isArray(data)) {
        throw new Error("appointments.json must contain an array");
    }

    return data;
}

module.exports = { loadAppointments };