// Assembles the deploy output: the app runs from its source files, so the
// build copies the server entry and the static page it serves into dist/.
import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync(new URL('./dist/', import.meta.url), { recursive: true });
copyFileSync(new URL('./index.js', import.meta.url), new URL('./dist/index.js', import.meta.url));
copyFileSync(new URL('./index.html', import.meta.url), new URL('./dist/index.html', import.meta.url));
console.log('Built dist/index.js and dist/index.html');
