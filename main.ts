// make.fun entry: u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
// Writes one text, at most 200 characters, to /output/entry.txt: a single-line joke about office
// life, the sort of line you send a colleague after a meeting that should have been an email.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted joke, kept here as the entry's single source of truth.
const LINE =
  "Our standup has a blocker in every column and a solution in none, so I've started saying 'no updates' as a personality.";

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
