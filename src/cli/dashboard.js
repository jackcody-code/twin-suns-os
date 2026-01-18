#!/usr/bin/env node

const path = require("node:path");
const fs = require("node:fs");

const { loadAppointments } = require("../data/loadAppointments");
const { buildDailyReport, saveDailyReport } = require("../services/reportService");

function main() {
  const baseDir = path.join(__dirname, "..", "..", "data");
  const dataPath = path.join(baseDir, "appointments.json");
  const reportsDir = path.join(baseDir, "reports");

  fs.mkdirSync(reportsDir, { recursive: true });

  const appointments = loadAppointments(dataPath, { minimumPrice: 0 }) || [];

  const text = buildDailyReport(appointments);

  const reportPath = path.join(reportsDir, "daily-report.txt");

  saveDailyReport(text, reportPath);

  console.log("\n=== Twin Suns OS: Operator Dashboard (Daily) ===\n");
  console.log(text);
  console.log("\nSaved report to:", reportPath);
}

main();
