import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smartwatch ordered me to breathe, then panicked at the heart rate its own scare caused.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
