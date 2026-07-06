import fs from "node:fs";
import path from "node:path";

const [version, phase, slug, currentFlag] = process.argv.slice(2);

if (!version || !phase || !slug) {
  throw new Error("Usage: node scripts/check-answerseal-release.mjs <version> <phase> <slug> [--current]");
}

const page = `${slug}.html`;
const isCurrent = currentFlag === "--current";

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const file of [page, "index.html", "versions.html", "README.md", "RELEASES.md", "CHANGELOG.md"]) {
  assert(fs.existsSync(file), `Missing ${file}`);
}

const app = read("app.js");
const landing = read("landing.js");
const index = read("index.html");
const versions = read("versions.html");
const releases = read("RELEASES.md");
const changelog = read("CHANGELOG.md");
const readme = read("README.md");
const pageHtml = read(page);

assert(pageHtml.includes(`<title>AnswerSeal | ${phase}</title>`), `${page} title is wrong`);
assert(pageHtml.includes(`${version} adds ${phase}`), `${page} does not describe ${version}`);
assert(index.includes(page), `index.html does not link ${page}`);
assert(versions.includes(page), `versions.html does not link ${page}`);
assert(readme.includes(`\`${page}\` - ${phase}`), `README.md missing ${page}`);
assert(releases.includes(`## ${version} - ${phase}`), `RELEASES.md missing ${version}`);
assert(changelog.includes(`## ${version} - ${phase}`), `CHANGELOG.md missing ${version}`);

if (isCurrent) {
  assert(app.includes(`const BUILD_VERSION = "${version}";`), `app.js is not on ${version}`);
  assert(landing.includes(`const PUBLIC_BUILD_VERSION = "${version}";`), `landing.js is not on ${version}`);
  assert(index.includes(`<strong>${version}</strong>`), `index.html current badge is not ${version}`);
  assert(versions.includes(`<h1 id="build-title">AnswerSeal ${version}</h1>`), `versions.html title is not ${version}`);
}

const htmlFiles = fs.readdirSync(".").filter((file) => file.endsWith(".html"));
const hrefPattern = /\b(?:href|src)="([^"]+)"/g;
const missing = [];

for (const file of htmlFiles) {
  const html = read(file);
  for (const match of html.matchAll(hrefPattern)) {
    const target = match[1];
    if (
      target.startsWith("http") ||
      target.startsWith("mailto:") ||
      target.startsWith("tel:") ||
      target.startsWith("#") ||
      target.startsWith("javascript:")
    ) {
      continue;
    }

    const cleanTarget = target.split("#")[0].split("?")[0];
    if (!cleanTarget || cleanTarget === "./" || cleanTarget === ".") {
      continue;
    }

    const resolved = path.normalize(cleanTarget);
    if (!fs.existsSync(resolved)) {
      missing.push(`${file} -> ${target}`);
    }
  }
}

assert(missing.length === 0, `Missing local links:\n${missing.join("\n")}`);

console.log(`${version} ${phase} consistency ok`);
