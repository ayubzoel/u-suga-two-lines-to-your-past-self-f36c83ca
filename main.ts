import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Line one: a warning to my past self about one specific moment.
const LINE_ONE =
  "When your father asks if you're happy at the job, don't say \"fine\" — say the truth before he nods and changes the subject.";

// Line two: one sentence on why that moment mattered and what changed.
const LINE_TWO =
  "That one honest answer would have saved you three years of Sundays dreading Monday morning.";

const lines = [LINE_ONE, LINE_TWO];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), lines.join("\n") + "\n", "utf8");
