/**
 * Setup check for the Assessment C starter kit (JavaScript).
 * Run from the repo folder:  npm run check     (same as: node scripts/check_setup.js)
 * Green = ready. Red = fix before your first task (raise your hand if stuck).
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let problems = 0;
const ok = (msg) => console.log(`  OK    ${msg}`);
const bad = (msg, fix) => { problems += 1; console.log(`  FIX   ${msg}\n        -> ${fix}`); };
const info = (msg) => console.log(`  INFO  ${msg}`);
const run = (cmd) => { try { return execSync(cmd, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { return null; } };

console.log('\nAssessment C setup check (JavaScript)\n');

const major = Number(process.versions.node.split('.')[0]);
if (major >= 18) ok(`Node.js ${process.versions.node}`);
else bad(`Node.js ${process.versions.node} is too old (fetch needs 18+)`, 'Install the LTS version from https://nodejs.org, then reopen VS Code.');

try { require.resolve('dotenv', { paths: [ROOT] }); ok('dotenv package installed'); }
catch { bad('dotenv package not installed', 'Run:  npm install'); }

const gitVersion = run('git --version');
if (gitVersion) ok(gitVersion); else bad('Git not found', 'Install Git from https://git-scm.com, then reopen VS Code.');
const gitName = run('git config user.name');
const gitEmail = run('git config user.email');
if (gitName && gitEmail) ok(`Git identity: ${gitName} <${gitEmail}>`);
else bad('Git name/email not set', 'Run:  git config --global user.name "Your Name"  and  git config --global user.email "you@example.com"');
if (run('git rev-parse --is-inside-work-tree') === 'true') ok('This folder is a Git repo');
else info('Not a Git repo yet. That is expected before launch step 4 (git init).');

const required = ['ai/workshops_spring2026.csv', 'ai/baseline_summary.md', 'ai/prompt_scaffold.md', 'api/task2.js',
  'mock-api/server.js', 'data/raw.csv', 'run_pipeline.js', 'notes/data_cleaning_log.md', 'notes/reflection.md', 'README.md', '.env.example'];
const missing = required.filter((f) => !fs.existsSync(path.join(ROOT, f)));
if (missing.length === 0) ok(`All ${required.length} starter files present`);
else bad(`Missing files: ${missing.join(', ')}`, 'Re-extract the starter kit zip into this folder.');

if (fs.existsSync(path.join(ROOT, '.env'))) info('.env exists (Task 2). Make sure .gitignore keeps it out of Git.');
else info('No .env yet. You will create it in Task 2.');

const req = http.get({ host: '127.0.0.1', port: 5050, path: '/health', timeout: 1500 }, (res) => {
  info(`Mock API is running on port 5050 (status ${res.statusCode}).`);
  res.resume();
  finish();
});
req.on('timeout', () => req.destroy());
req.on('error', () => { info('Mock API not running. That is fine until Task 2 (npm run mock-api).'); finish(); });

let finished = false;
function finish() {
  if (finished) return;
  finished = true;
  console.log(problems === 0 ? '\nREADY: no problems found.\n' : `\nNOT READY: fix the ${problems} item(s) marked FIX above.\n`);
  process.exitCode = problems === 0 ? 0 : 1;
}
