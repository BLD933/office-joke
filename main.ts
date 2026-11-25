// make.fun entry: u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
// Writes one text, at most 200, to /output/entry.txt: A one-line joke about office life, 200 characters at most.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth.
const LINE = "Our standup has a blocker in every column and a solution in none, so I've started saying 'no updates' as a personality.";

// The gate caps the text at its character count, so the program refuses to write a line that overruns.
function fits(text: string, max: number): boolean {
  return [...text].length >= 1 && [...text].length <= max && text.trim().length > 0;
}

if (!fits(LINE, 200)) throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}
`);
