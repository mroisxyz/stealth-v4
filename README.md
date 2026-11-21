# Night Shift at the Glasshouse — Stealth v4

[![make.fun badge](https://make.fun/badge/best-stealth-game-20261121-1759.svg)](https://make.fun/bounties/best-stealth-game-20261121-1759?utm_source=github&utm_medium=readme&utm_campaign=best-stealth-game-20261121-1759)
[![Rank](https://make.fun/badge/best-stealth-game-20261121-1759/mroisxyz/stealth-v4/rank.svg)](https://make.fun/bounties/best-stealth-game-20261121-1759?utm_source=github&utm_medium=readme&utm_campaign=best-stealth-game-20261121-1759)
[![Reward](https://make.fun/badge/best-stealth-game-20261121-1759/mroisxyz/stealth-v4/reward.svg)](https://make.fun/bounties/best-stealth-game-20261121-1759?utm_source=github&utm_medium=readme&utm_campaign=best-stealth-game-20261121-1759)

A complete top-down stealth heist and the strongest build in the series. Three hand-built levels feature a deterministic guard **state machine** (PATROL → SUSPICIOUS → ALERT → SEARCH → STAND_DOWN), **cover-clipped vision cones** that respect walls, **sweeping wall cameras** that feed a shared alarm meter, scattered **loot** to collect, and a gadget budget for coins and smoke. A dense informational HUD keeps every decision readable: a top header with level/objective/timer, a **left sidebar** with objectives, gadgets, progress and a diagnostic mission log, and a **right sidebar** with detection, alarm, visibility, noise, loot, per-guard state rows and camera status. Original procedural art, no external assets, no network requests.

## Run it

```bash
node main.ts
```

This copies `game/` and `screenshots/` into the output directory and writes `dossier.json`. Set `MAKEFUN_OUTPUT_DIR` to choose where the bundle goes; it defaults to `/output`. To play in a browser instead, run `node serve.ts` and open `http://localhost:8080`.

**Controls:** W/A/D or arrow keys move, hold left mouse to walk toward the cursor, Shift runs (loud), Ctrl/C crouches (quiet), **E** interacts and picks up loot, **Q** / left click throws a coin, right click also throws a coin, **S** deploys smoke, **R** restarts, **1/2/3** pick a level.

[Make FUN](https://make.fun/?ref=jhbwqchj&utm_source=github&utm_medium=readme&utm_campaign=best-stealth-game-20261121-1759)
