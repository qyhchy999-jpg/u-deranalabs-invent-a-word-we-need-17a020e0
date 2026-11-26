# Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/qyhchy999-jpg/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/qyhchy999-jpg/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

One new word and its one-line definition: "screenvertigo — the dizzy, seasick feeling after an hour of staring at your phone in bed." It fills a real gap — everyone who reads in the dark has felt the room tilt a little when they finally look up, and no existing word names it. Sayable and spellable (screen + vertigo), and the definition lands in one reading because the experience is universal.

## Entry

`main.ts` (Node 22, standard library only) writes the word and definition to `/output/entry.txt`. The text is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 140 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: screenvertigo is the only dizziness you can cure by looking away. -->
