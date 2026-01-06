const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { loadAppointments } = require("../src/data/loadAppointments");

test("loads appointments from a JSON file", () => {
    const tempPath = path.join(process.cwd(), "data", "tmp-appointments.json");
    fs.writeFileSync(
        tempPath,
        JSON.stringify([{ client: "Test", price: 123 }]),
        "utf-8"
    );

    const result = loadAppointments(tempPath);
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].price, 123);

    fs.unlinkSync(tempPath);
});