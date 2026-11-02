/**
 * Task 2 - API Call Simulation (JavaScript)
 *
 * Goal: call the mock Workshops API, parse the JSON response, and print the
 * workshop "title". Then prove your code handles a failure with a friendly
 * message instead of a crash.
 *
 * Before you run this:
 *   1. Terminal 1:  npm run mock-api      (leave it running)
 *   2. Create .env from .env.example and fill in the values from your Task 2 instructions
 *   3. Terminal 2:  npm run task2         (same as: node api/task2.js)
 *
 * Rules: no AI tools for this task. Never paste the API key into this file.
 */
require('dotenv').config(); // loads the values in .env into process.env

// TODO 1: Read API_BASE_URL, API_KEY, and WORKSHOP_ID from process.env.


// TODO 2: Write a reusable async function getWorkshopTitle(id) that:
//   - sends a GET request to  <API_BASE_URL>/api/v1/workshops/<id>
//   - sends the API key in the request header  x-api-key
//   - checks the response status before trusting the body
//   - parses the JSON and returns the workshop's title
//     (print the parsed JSON once to find where "title" lives)


// TODO 3: Call getWorkshopTitle with your WORKSHOP_ID and print the title.
//   If anything fails (server down, bad status, bad JSON), log a clear,
//   friendly error message. Your program should not crash with a stack trace.
