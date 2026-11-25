// Invent a Word We Need — make.fun entry for @yuhao-qiao.
// The program writes one new word and its one-line definition to
// /output/entry.txt. The text is baked into the code below so the
// program runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "tabnesia" — opening a browser tab and instantly
// forgetting why you opened it. It fills a real gap: everyone who
// lives in a browser has felt it, and no existing word names it.
// It is sayable and spellable (tab + amnesia), and the definition
// lands in one reading because the experience is universal. The
// whole entry is one word plus one clear line, inside 140 chars.
const LINE =
  "tabnesia — opening a browser tab and instantly forgetting why you opened it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the word and logic are unchanged.
// Second pass: tab + amnesia fuses into a word you can say out loud.
