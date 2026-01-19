function evaluateAlerts({ appointmentsTomorrow = 0, threshold = 3 } = {}) {
  const alerts = [];

  if (appointmentsTomorrow < threshold) {
    alerts.push("Low appointments tomorrow");
  }

  return alerts;
}

module.exports = {
  evaluateAlerts,
};
