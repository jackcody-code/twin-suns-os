const test = require("node:test");
const assert = require("node:assert");
const { buildDailyReport } = require("../src/services/reportService");

test("buildDailyReport outputs counts by status", () => {
    const sample = [
        { status: "requested" },
        { status: "confirmed" },
        { status: "confirmed" },
        { status: "canceled" },
    ];

    const text = buildDailyReport(sample);

    assert.ok(text.includes("Total: 4"));
    assert.ok(text.includes("Requested: 1"));
    assert.ok(text.includes("Confirmed: 2"));
    assert.ok(text.includes("Canceled: 1"));
});
test("buildDailyReport supports custom title", () => {
  const sample = [{ status: "confirmed" }];

  const text = buildDailyReport(sample, {
    title: "Confirmed Appointments Only",
  });

  assert.ok(text.startsWith("Confirmed Appointments Only"));
});
