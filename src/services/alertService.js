function evaluateAlerts(metrics, thresholds = {}) {
    const alerts = [];

    const {
        minCompletionRate = 0.7,
        maxCancellationRate = 0.2,
        minRevenue = 0
    } = thresholds;

    if (metrics.completionRate < minCompletionRate) {
        alerts.push("Low completion rate");
    }

    if (metrics.cancellationRate > maxCancellationRate) {
        alerts.push("High cancellation rate");
    }

    if (metrics.revenue < minRevenue) {
        alerts.push("Revenue below target");
    }

    return alerts;
}

module.exports = { evaluateAlerts };