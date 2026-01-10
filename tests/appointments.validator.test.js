const test = require("node:test");
const assert = require("node:assert");
const { isValidAppointment } = require("../src/validators/appointments");

test("isValidAppointment returns true for valid appointment objects", () => {
    assert.strictEqual(isValidAppointment({ client: "Ashley", price: 420 }), true);
});

test("isValidAppointment returns false for missing/invalid client", () => {
    assert.strictEqual(isValidAppointment({ price: 100 }), false);
    assert.strictEqual(isValidAppointment({ client: "", price: 100 }), false);
});

test("isValidAppointment returns false for invalid price", () => {
    assert.strictEqual(isValidAppointment({ client: "Hawk", price: "nope" }), false);
    assert.strictEqual(isValidAppointment({ client: "Hawk" }), false);
});