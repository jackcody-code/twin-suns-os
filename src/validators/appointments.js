function isValidAppointment(appointment) {
    if (!appointment || typeof appointment !== "object") return false;

    const clientOk =
        typeof appointment.client === "string" && appointment.client.trim().length > 0;

    const price = Number(appointment.price);
    const priceOk = Number.isFinite(price) && price >= 0;

    return clientOk && priceOk;
}

function validateAppointmentsArray(data) {
    if (!Array.isArray(data)) {
        throw new Error("appointments.json must contain an array");
    }
    return data;
}

module.exports = { isValidAppointment, validateAppointmentsArray };