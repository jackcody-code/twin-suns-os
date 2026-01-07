const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { loadAppointments } = require("../src/data/loadAppointments");

test("filters appointments below minimumPrice when loading", () => {
    const tempPath = path.join(process.cwd(), "data", "tmp-filter-test.json");

    const sample = [
        { client: "ASHLEY", price: 100 },
        { client: "HAWK", price: 600 },
        { client: "FOX", price: 1000 }
    ];

    fs.writeFileSync(tempPath, JSON.stringify(sample), "utf-8");

    const config = { minimumPrice: 500 };
    const result = loadAppointments(tempPath, config);


    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0].price, 600);
    assert.strictEqual(result[1].price, 1000);

    fs.unlinkSync(tempPath);
});