import { cpSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.error("Standalone build not found. Run 'next build' first.");
  process.exit(1);
}

const staticSrc = join(root, ".next", "static");
const staticDst = join(standalone, ".next", "static");
mkdirSync(join(standalone, ".next"), { recursive: true });
cpSync(staticSrc, staticDst, { recursive: true });
console.log("Copied .next/static -> standalone");

const publicSrc = join(root, "public");
const publicDst = join(standalone, "public");
cpSync(publicSrc, publicDst, { recursive: true });
console.log("Copied public -> standalone");

console.log("Standalone build ready.");
