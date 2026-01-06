const test = require("node:test");
const assert = require("node:assert");
const { calculateDailyRevenue } = require("../src/services/revenue");

test("calculates total daily revenue from appointments", () => {
    const appointments = [
        { price: 100 },
        { price: 200 },
        { price: 300 }
    ];

    const config = { minimumPrice: 0 };

    const result = calculateDailyRevenue(appointments, config);

    assert.strictEqual(result, 600);
});
test("ignores invalid prices and values below minimum", () => {
  const appointments = [
    { price: 100 },
    { price: -50 },
    { price: "abc" },
    {}
  ];

  const config = { minimumPrice: 0 };

  const result = calculateDailyRevenue(appointments, config);

  assert.strictEqual(result, 100);
});
