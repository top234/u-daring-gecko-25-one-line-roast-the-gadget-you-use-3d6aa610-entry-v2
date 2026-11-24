# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/top234/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-entry-v2/rank.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/top234/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-entry-v2/reward.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [make.fun](https://make.fun) competition
**One-Line Roast: The Gadget You Use Every Day** — one original line, at most
200 characters, roasting a gadget or app used every day.

## The line

> My smartwatch ordered me to breathe, then panicked at the heart rate its own scare caused.

The roast: a smartwatch that plays wellness coach, orders you to calm down,
then alarms at the very heart rate its own scare caused — the gadget's "help"
is the problem.

## How it works

`main.ts` is a small Node program (builtins only, no network, no
dependencies). It writes the single line to `$OUTPUT_DIR/entry.txt`
(or `/output/entry.txt` when `OUTPUT_DIR` is unset).

Run it locally:

```sh
OUTPUT_DIR=/tmp/roast-out node main.ts
cat /tmp/roast-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
