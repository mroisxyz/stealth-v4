// Assembles the stealth-v4 submission bundle: copies game/ and screenshots/
// into the output directory and writes dossier.json with the vendored kit's
// unchanged buildDossier. Outside the grader: MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Authored v4 pass over the proven stealth build: a deterministic guard state
// machine (PATROL -> SUSPICIOUS -> ALERT -> SEARCH -> STAND_DOWN), sweeping wall
// cameras feeding a shared alarm, cover-clipped vision cones, scattered loot,
// and two dense HUD sidebars (objectives/gadgets/log left, detection/alarm/camera
// rows right) — all local assets, no network requests.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Authored helper: one call site reports the assembled bundle's dossier size.
function reportBuild(outDir: string, bytes: number): void {
  console.log(`Built stealth-v4 bundle in ${outDir} — dossier.json is ${bytes} bytes`);
}

mkdirSync(outDir, { recursive: true });
cpSync(join(here, 'game'), join(outDir, 'game'), { recursive: true });
mkdirSync(join(outDir, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(outDir, 'screenshots'), { recursive: true });
}

const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});

const bytes = Buffer.byteLength(dossier, 'utf8');
writeFileSync(join(outDir, 'dossier.json'), dossier);
reportBuild(outDir, bytes);
