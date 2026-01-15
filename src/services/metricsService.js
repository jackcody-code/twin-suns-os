function calculateMetrics(appointments) {
    const revenue = appointments.reduce(
        (sum, a) => sum + (Number(a.price) || 0),
        0
    );

    const completed = appointments.filter(a => a.status === "completed").length;
    const canceled = appointments.filter(a => a.status === "canceled").length;

    return {
        totalAppointments: appointments.length,
        revenue,
        completionRate:
            appointments.length === 0 ? 0 : completed / appointments.length,
        cancellationRate:
            appointments.length === 0 ? 0 : canceled / appointments.length
    };
}

module.exports = { calculateMetrics };