import {$} from 'zx';

await $`npm pack`;

await $`npm publish --access restricted`