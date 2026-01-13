const fs = require("node:fs");
const path = require("node:path");

function saveAppointments(filePath, appointments) {
    if (!Array.isArray(appointments)) {
        throw new Error("appointments must be an array");
    }

    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(
        filePath,
        JSON.stringify(appointments, null, 2),
        "utf-8"
    );
}

module.exports = { saveAppointments };