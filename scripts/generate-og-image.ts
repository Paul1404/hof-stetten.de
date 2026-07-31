import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "..");
const publicDir = resolve(root, "public");
mkdirSync(publicDir, { recursive: true });

await sharp(resolve(root, "src/assets/images/st-anna.jpg"))
  .resize(1200, 630, { fit: "cover", position: "centre", kernel: "lanczos3" })
  .jpeg({ quality: 86, progressive: true, mozjpeg: true })
  .toFile(resolve(publicDir, "og.jpg"));

console.log("wrote og.jpg (1200x630)");
