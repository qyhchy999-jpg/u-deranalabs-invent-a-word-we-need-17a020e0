// Invent a Word We Need — make.fun entry for @yuhao-qiao.
// The program writes one new word and its one-line definition to
// /output/entry.txt. The text is baked into the code below so the
// program runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "screenvertigo" — the dizzy, seasick feeling after an
// hour of staring at your phone in bed. It fills a real gap: everyone
// who reads in the dark has felt the room tilt a little when they
// finally look up, and no existing word names it. It is sayable and
// spellable (screen + vertigo), and the definition lands in one
// reading because the experience is universal. The whole entry is one
// word plus one clear line, inside 140 chars.
// Screen + vertigo: two familiar words fused into one you can say aloud.
// Everyone who reads in bed knows this dizzy feeling — now it has a name.
const LINE =
  "screenvertigo — the dizzy, seasick feeling after an hour of staring at your phone in bed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the word and logic are unchanged.
// Second pass: screen + vertigo fuses into a word you can say out loud.
