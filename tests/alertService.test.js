const test = require("node:test");
const assert = require("node:assert");
const { evaluateAlerts } = require("../src/services/alertService");

test("evaluateAlerts flags risky metrics", () => {
    const metrics = {
        completionRate: 0.5,
        cancellationRate: 0.4,
        revenue: 200
    };

    const alerts = evaluateAlerts(metrics, {
        minCompletionRate: 0.7,
        maxCancellationRate: 0.2,
        minRevenue: 500
    });

    assert.ok(alerts.includes("Low completion rate"));
    assert.ok(alerts.includes("High cancellation rate"));
    assert.ok(alerts.includes("Revenue below target"));
});