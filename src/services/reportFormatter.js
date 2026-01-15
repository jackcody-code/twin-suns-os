function formatWeeklyReport(report) {
    const lines = [];

    lines.push(report.title);
    lines.push("-".repeat(report.title.length));
    lines.push(`Total Appointments: ${report.totalAppointments}`);
    lines.push(`Total Revenue: $${report.totalRevenue}`);

    lines.push("");
    lines.push("Appointments by Status:");

    for (const [status, count] of Object.entries(report.countsByStatus)) {
        lines.push(`- ${status}: ${count}`);
    }

    return lines.join("\n");
}

module.exports = { formatWeeklyReport };