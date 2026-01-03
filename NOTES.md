# Day 2 Notes

## What this system does
This script calculates daily business revenue from a list of appointments.

## Input
- An array of appointment objects
- Each appointment has a client name and price

## Process
- Uses `reduce()` to sum all appointment prices
- Validates data to avoid errors
- Formats the total as currency

## Output
- Logs total daily revenue as a number and formatted USD

## Why this matters
This same pattern applies to:
- Payroll
- Invoicing
- Sales reports
- Automation systems
## Day 3 – Modules & Separation of Concerns

I split the system into modules:
- data (appointments)
- services (business logic)
- utils (formatting)
- index.js (wiring)

This makes the system easier to test, change, and reuse.
