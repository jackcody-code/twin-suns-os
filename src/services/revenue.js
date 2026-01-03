function calculateDailyRevenue(appointments) {
    if (!Array.isArray(appointments)) return 0;

    return appointments.reduce((total, appointment) => {
        const price = Number(appointment?.price);
        if (!Number.isFinite(price)) return total;
        return total + price;
    }, 0);
}

module.exports = { calculateDailyRevenue };