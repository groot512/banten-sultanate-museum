import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = "dist/client";
const css = readdirSync(join(root, "assets")).find(
  (name) => name.startsWith("styles-") && name.endsWith(".css"),
);
if (!css) throw new Error("no styles css in dist/client/assets");

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    if (!path.endsWith(".html")) continue;
    const next = readFileSync(path, "utf8").replace(/styles-[A-Za-z0-9_-]+\.css/g, css);
    writeFileSync(path, next);
  }
}

walk(root);
const index = readFileSync(join(root, "index.html"));
writeFileSync(join(root, "404.html"), index);
console.log(`[pages-html] css ${css}; 404.html copied from index.html`);
