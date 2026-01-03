const { appointments } = require("./data/appointments");
const { calculateDailyRevenue } = require("./services/revenue");
const { formatUSD } = require("./utils/format");

const dailyRevenue = calculateDailyRevenue(appointments);

console.log("Daily revenue:", dailyRevenue, "-", formatUSD(dailyRevenue));
