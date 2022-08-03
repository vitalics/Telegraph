import { $ } from 'zx';

const GIT_TAG_LATEST = (await $`git describe --abbrev=0`).stdout.trim();


await $`pnpm --filter @tlgr/docs run docusaurus docs:version "${GIT_TAG_LATEST}"`;
await $`pnpm --filter @tlgr/docs run deploy`;
