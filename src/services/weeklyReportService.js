const { APPOINTMENT_STATUS } = require("../domain/appointments");
const { calculateMetrics } = require("./metricsService");
const { evaluateAlerts } = require("./alertService");

function buildWeeklyReport(appointments, options = {}) {
    const title = options.title || "Weekly Appointment Report";


    const totalRevenue = appointments.reduce(
        (sum, a) => sum + (Number(a.price) || 0),
        0
    );
const metrics = calculateMetrics(appointments);

    const countsByStatus = Object.values(APPOINTMENT_STATUS).reduce(
        (acc, status) => {
            acc[status] = appointments.filter(a => a.status === status).length;
            return acc;
        },
        {}
    );
    const alerts = evaluateAlerts(metrics, options.thresholds);
return {
  title,
  ...metrics,
  countsByStatus,
  alerts
};

    return {
        title,
        totalAppointments: appointments.length,
        totalRevenue,
        countsByStatus
    };
}

module.exports = { buildWeeklyReport };