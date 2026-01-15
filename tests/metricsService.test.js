const test = require("node:test");
const assert = require("node:assert");
const { calculateMetrics } = require("../src/services/metricsService");

test("calculateMetrics returns correct ratios", () => {
    const appointments = [
        { price: 100, status: "completed" },
        { price: 200, status: "completed" },
        { price: 50, status: "canceled" }
    ];

    const metrics = calculateMetrics(appointments);

    assert.strictEqual(metrics.revenue, 350);
    assert.strictEqual(metrics.totalAppointments, 3);
    assert.strictEqual(metrics.completionRate, 2 / 3);
    assert.strictEqual(metrics.cancellationRate, 1 / 3);
});