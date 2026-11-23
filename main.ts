import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, written verbatim: the headline is the whole entry.
const line =
  "COP31 collapses in Antalya with no fossil-fuel deal, leaving climate talks suspended until next year.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
