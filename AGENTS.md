# AGENTS.md

MakeCode Arcade extension repo: `pxt.halloween-arcade` (namespace `halloween`).

## Structure
- `pxt.json` — extension manifest (`device: "*"` + `Extra Effects`, files: main.ts, tilemap.g.jres, tilemap.g.ts, icon.png, README.md)
- `main.ts` — 6 blocks in namespace `halloween`, internal jump/fall state, and level rules (chest + enemy overlap) registered once per kind
- `tilemap.g.jres` / `tilemap.g.ts` — embedded tilemap `halloweenNivel1` / tile `halloweenMosaico`, namespace `halloweenTiles` (generated, do not edit; renames must stay in sync in jres/g.ts/main.ts)

## Commands
- No local toolchain. Build/test happens in the MakeCode Arcade editor: import repo via GitHub button, first `bump` generates tag, test as Local extension in a project, iterate by editing and refreshing.
- Do not rename published `blockId`s or the namespace.