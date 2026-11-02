/**
 * Task 3 - Data Pipeline Build (JavaScript)
 *
 * Reads    data/raw.csv
 * Writes   data/clean.csv  and  data/export.json
 * Run:     npm run pipeline        (same as: node run_pipeline.js)
 *
 * Rules: no AI tools for this task. Plain Node.js (fs, path) is enough.
 * Commit as you go:  scaffold -> feature -> refactor  (see your Task 3 instructions).
 */
const fs = require('fs');
const path = require('path');

const RAW_PATH = path.join(__dirname, 'data', 'raw.csv');
const CLEAN_PATH = path.join(__dirname, 'data', 'clean.csv');
const JSON_PATH = path.join(__dirname, 'data', 'export.json');

// Logging helper (Week 7 standard: timestamp | level | message).
// Use it at the key steps: start, rows read, anomalies found, rows written, finish.
function log(level, message) {
  console.log(`${new Date().toISOString()} | ${level} | ${message}`);
}

// TODO 1 - Load: read raw.csv and split it into a header row and data rows.
//   Look at every value you load. Does any text look garbled?
function loadRaw(filePath) {
}

// TODO 2 - Headers: give every column a clear snake_case name.
//   Some header cells are blank. Look at the data to decide what they hold.
function fixHeaders(headerRow) {
}

// TODO 3 - Clean one row: trim text, make types consistent (numbers are numbers,
//   dates are one format), and decide what to do with null-like values
//   (remove the row, fill a value, or flag it). Write your decisions in the cleaning log.
function cleanRow(row) {
}

// TODO 4 - Export: write the cleaned rows to clean.csv and export.json.
//   Your JSON must be valid. Numbers should be numbers, not strings.
function writeOutputs(rows) {
}

function main() {
  log('INFO', 'Pipeline start');
  // TODO 5 - Wire the steps together, logging rows read, anomalies found, and rows written.
}

main();
