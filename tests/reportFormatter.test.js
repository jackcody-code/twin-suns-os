const test = require("node:test");
const assert = require("node:assert");
const { formatWeeklyReport } = require("../src/services/reportFormatter");

test("formatWeeklyReport outputs readable text", () => {
    const report = {
        title: "Weekly Appointment Report",
        totalAppointments: 3,
        totalRevenue: 350,
        countsByStatus: {
            completed: 2,
            canceled: 1
        }
    };

    const text = formatWeeklyReport(report);

    assert.ok(text.includes("Weekly Appointment Report"));
    assert.ok(text.includes("Total Appointments: 3"));
    assert.ok(text.includes("Total Revenue: $350"));
    assert.ok(text.includes("completed: 2"));
    assert.ok(text.includes("canceled: 1"));
});