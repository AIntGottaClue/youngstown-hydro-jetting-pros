import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('dist/_worker.js', { recursive: true });
await writeFile('dist/_worker.js/index.js', `export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n`);
