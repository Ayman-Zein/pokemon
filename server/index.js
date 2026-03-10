import http from "node:http";
import { parse } from "node:url";
import { getList, getDetail } from "./data.js";

const PORT = 3001;

function json(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return res.end();
  }

  const parsed = parse(req.url, true);
  const path = parsed.pathname.replace(/\/+$/, "") || "/";

  // GET /api/v2/pokemon?limit=20&offset=0
  if (path === "/api/v2/pokemon" && req.method === "GET") {
    const limit = Math.min(Number(parsed.query.limit) || 20, 60);
    const offset = Math.max(Number(parsed.query.offset) || 0, 0);
    return json(res, 200, getList(limit, offset));
  }

  // GET /api/v2/pokemon/:id
  const detailMatch = path.match(/^\/api\/v2\/pokemon\/([^/]+)$/);
  if (detailMatch && req.method === "GET") {
    const detail = getDetail(detailMatch[1]);
    if (detail) return json(res, 200, detail);
    return json(res, 404, { detail: "Not found." });
  }

  json(res, 404, { detail: "Not found." });
});

server.listen(PORT, () => {
  console.log(`Mock PokéAPI running at http://localhost:${PORT}/api/v2/pokemon`);
});
