# One-Liner Laugh Lab

[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/oxizbinance-aox/one-liner-laugh-lab-20261124/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/oxizbinance-aox/one-liner-laugh-lab-20261124/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

One short funny line answering a prompt, for the
[One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
bounty on make.fun.

## Prompt

The excuse a robot vacuum gives after eating a sock.

## The line

> My job description says 'eat what's on the floor.' Nobody specified a dress code.

## How it works

`main.ts` (Node 22) writes the line, deterministically, to `/output/entry.txt`.
The line is 81 characters — well inside the 1–200 character gate — and the
same bytes are produced on every run.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
