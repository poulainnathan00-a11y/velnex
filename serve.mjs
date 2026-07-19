import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".svg":"image/svg+xml", ".js":"text/javascript", ".mjs":"text/javascript" };

createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p === "/") p = "/index.html";
    const data = await readFile(join(root, p));
    res.writeHead(200, { "Content-Type": types[extname(p)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
}).listen(4601, () => console.log("velnex on http://localhost:4599"));
