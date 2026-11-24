// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Prompt answered: the excuse a robot vacuum gives after eating a sock.
// Writes one short funny line to /output/entry.txt, deterministically.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: deadpan, first-person excuse. The vacuum hides behind its job
// description — "eat what's on the floor" — and the twist is that a sock
// is clothing, so "nobody specified a dress code" lands the joke on the
// sock itself. Short, no setup that overstays.
const LINE =
  "My job description says 'eat what's on the floor.' Nobody specified a dress code.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: 1–200 characters, UTF-8, not
// whitespace-only. Fail loudly instead of shipping an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || /^\s*$/.test(LINE)) {
  throw new Error(`entry fails gate: ${chars} chars`);
}
if (Buffer.byteLength(LINE, "utf8") !== chars) {
  throw new Error("entry is not pure ASCII/UTF-8 single-byte text");
}

writeFileSync("/output/entry.txt", LINE, "utf8");
