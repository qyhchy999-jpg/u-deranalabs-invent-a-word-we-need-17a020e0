# Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/qyhchy999-jpg/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/qyhchy999-jpg/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

One new word and its one-line definition: "scrollock — the trance where your thumb keeps scrolling long after your brain has already checked out for the night." It names the autopilot everyone knows: the mind went home hours ago, the thumb is still on shift at 1 a.m. Sayable and spellable (scroll + lock, like gridlock), and the definition lands in one reading because the experience is universal. The earlier "screenvertigo" line ranked 759/3026 in round 3; this one names the behaviour itself, not the dizziness, which is the sharper gap.

## Entry

`main.ts` (Node 22, standard library only) writes the word and definition to `/output/entry.txt`. The text is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 140 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Rewritten 2026-11-27 (round 5): scrollock replaces screenvertigo; the thumb keeps working after the brain clocks out. -->
