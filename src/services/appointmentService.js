const { transitionAppointment } = require("../domain/appointments");
function updateAppointmentStatus(appointment, newStatus) {
  if (!appointment || !appointment.status) {
    throw new Error("Invalid appointment object");
  }

  const updated = transitionAppointment(appointment, newStatus);

  return updated;
}
module.exports = {
  updateAppointmentStatus,
};

// Add your appointment service code here