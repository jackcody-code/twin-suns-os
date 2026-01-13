const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { saveAppointments } = require("../src/data/saveAppointments");

test("saves appointments to disk", () => {
    const tempPath = path.join(process.cwd(), "tests", "tmp-save.json");

    const data = [
        { id: 1, status: "confirmed" },
        { id: 2, status: "completed" },
    ];

    saveAppointments(tempPath, data);

    const saved = JSON.parse(fs.readFileSync(tempPath, "utf-8"));
    assert.strictEqual(saved.length, 2);
    assert.strictEqual(saved[0].status, "confirmed");

    fs.unlinkSync(tempPath);
});