#!/usr/bin/env zx
import { $, argv, fs, os } from "zx";

const type = argv.type || argv.t;
// for manual releases
let msg = '';
const upcomingFile = 'upcoming.md';

function assertType(type) {
  if (!['major', 'minor', 'patch'].includes(type)) {
    throw new Error(`Invalid type: ${type}`);
  }
}

assertType(type);

if (!fs.existsSync(upcomingFile)) {
  throw new Error(`! No upcoming.md found, create and fill ${upcomingFile} first`);
}

msg = await fs.readFile(upcomingFile, 'utf8');

await $`chmod -R 777 .changeset`; // update permissions for execution

// create empty changeset file
await $`pnpm changeset --empty`;
await $`exit 0`; // exit with success

await $`pnpm changeset version`; // add changeset

const { stdout: version } = await $`pnpm version ${type} --no-git-tag-version`;

// write to releases folder release.
await fs.writeFile(`releases/${version.trim()}.md`, msg);
// fill upcoming.md release with empty string
await fs.writeFile(upcomingFile, os.EOL);

const commitMsg = `${'Release ' + version.trim() + '\n\n' + msg}`;

// git commit message
await $`git add .`;
await $`git commit -m ${commitMsg}`;

// create git tag without pushing
await $`git tag -a ${version.trim()} -m ${commitMsg}`;

// push tag
await $`git push origin ${version.trim()} --tags -f`;

const { baseBranch } = await fs.readJSON('.changeset/config.json');
// push main
await $`git push -u origin ${baseBranch}`;
