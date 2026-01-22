// Alerts are designed to notify the operator only when action may be required.
// Thresholds are intentionally conservative to avoid alert fatigue.
function evaluateAlerts({ appointmentsTomorrow = 0, threshold = 5 } = {}) {
  const alerts = [];
const DEFAULT_THRESHOLDS = {
  lowAppointmentsTomorrow: 5,
};

 
if (appointmentsTomorrow === 0) {
  alerts.push("CRITICAL: No appointments scheduled for tomorrow");
} else if (appointmentsTomorrow < DEFAULT_THRESHOLDS.lowAppointmentsTomorrow) {
  alerts.push(
    `Low appointments tomorrow (${appointmentsTomorrow} < ${DEFAULT_THRESHOLDS.lowAppointmentsTomorrow})`
  );
}


  return alerts;
}

module.exports = {
  evaluateAlerts,
};
