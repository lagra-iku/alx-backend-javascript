const http = require('http');
const url = require('url');
const { countStudents } = require('./3-read_file_async');

const PORT = 1245;

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
    const databaseFilePath = parsedUrl.query.database;
    if (!databaseFilePath) {
      res.end('Error: Database file path is required.\n');
      return;
    }
    countStudents(databaseFilePath)
      .then((counters) => {
        res.end(`This is the list of our students\n${JSON.stringify(counters, null, 4)}\n`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(PORT, () => {
});

module.exports = app;
