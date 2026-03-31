const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, "../../frontend/public");

const mimeTypes = {
  ".html": "text/html; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=UTF-8" });
  res.end(JSON.stringify(data, null, 2));
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendJson(res, 404, { error: "Archivo no encontrado" });
        return;
      }

      sendJson(res, 500, { error: "Error interno al leer el archivo" });
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = req.url || "/";

  if (requestUrl === "/api/tecnologias") {
    sendJson(res, 200, {
      tema: "Stack de ejemplo",
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Node.js"],
      practica: "Conectar frontend y backend con fetch()"
    });
    return;
  }

  const safePath = requestUrl === "/" ? "/index.html" : requestUrl;
  const normalizedPath = path.normalize(safePath).replace(/^([.][.][/\\])+/, "");
  const fullPath = path.join(PUBLIC_DIR, normalizedPath);

  if (!fullPath.startsWith(PUBLIC_DIR)) {
    sendJson(res, 403, { error: "Acceso denegado" });
    return;
  }

  serveFile(res, fullPath);
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
