const test = require("node:test");
const assert = require("node:assert");
const { updateAppointmentStatus } = require("../src/services/appointmentService");
const { APPOINTMENT_STATUS } = require("../src/domain/appointments");

test("service updates appointment status using domain rules", () => {
    const appt = { id: 1, status: APPOINTMENT_STATUS.REQUESTED };

    const updated = updateAppointmentStatus(
        appt,
        APPOINTMENT_STATUS.CONFIRMED
    );

    assert.strictEqual(updated.status, APPOINTMENT_STATUS.CONFIRMED);
});

test("service rejects invalid appointment input", () => {
    assert.throws(() => {
        updateAppointmentStatus(null, APPOINTMENT_STATUS.CONFIRMED);
    });
});