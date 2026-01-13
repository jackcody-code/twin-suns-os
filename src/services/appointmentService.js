const { transitionAppointment } = require("../domain/appointments");
const { saveAppointments } = require("../data/saveAppointments");
function updateAndPersistAppointments(filePath, appointments, id, newStatus) {
  const updatedAppointments = appointments.map((appt) => {
    if (appt.id !== id) return appt;
    return updateAppointmentStatus(appt, newStatus);
  });

  saveAppointments(filePath, updatedAppointments);

  return updatedAppointments;
}

function updateAppointmentStatus(appointment, newStatus) {
  if (!appointment || !appointment.status) {
    throw new Error("Invalid appointment object");
  }

  const updated = transitionAppointment(appointment, newStatus);

  return updated;
}

module.exports = {
  updateAppointmentStatus,
  updateAndPersistAppointments,
};

// Add your appointment service code here