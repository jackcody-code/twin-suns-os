const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const { loadAppointments } = require("../src/data/loadAppointments");

test("throws a clear error for invalid JSON", () => {
  const tempPath = path.join(process.cwd(), "tests", "tmp-bad.json");

  fs.writeFileSync(tempPath, "{ bad json", "utf-8");

  assert.throws(
    () => loadAppointments(tempPath, { minimumPrice: 0 }),
    /invalid JSON/
  );

  fs.unlinkSync(tempPath);
});

test("throws a clear error when file does not exist", () => {
  const tempPath = path.join(process.cwd(), "tests", "non-existent.json");

  assert.throws(
    () => loadAppointments(tempPath, { minimumPrice: 0 }),
    /Failed to read appointments file/
  );
});
