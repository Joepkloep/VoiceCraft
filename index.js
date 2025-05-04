const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("VoiceCraft-server draait!");
});

// Gebruik poort uit omgevingsvariabele (voor Render), anders 25565
const port = process.env.PORT || 25566;

server.listen(port, () => {
  console.log(`VoiceCraft-server draait op poort ${port}`);
});

