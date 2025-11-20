const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url == '/favicon.ico') return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} - New Req Received\n`;
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);

  fs.appendFile('log.txt', '', (err) => {
    if (err) console.error(err);
    else console.log('Log written successfully');

    switch (parsedUrl.pathname) {
      case '/':
        res.end('Home Page\n');
        break;

      case '/contact':
        res.end('Contact Page\n');
        break;

      case '/about':
        const username = parsedUrl.query.myname;
        const id = parsedUrl.query.id;
        const phno = parsedUrl.query.phno;
        res.end(`About Page\n\nHello! ${username}\nID: ${id}\nPhone Number: ${phno}`);
        break;

      case '/login':
        if (req.method == 'GET')
          res.end('Login Page\n');
        else if (req.method == 'POST') {
          let body = '';
          // some query data;
          console.log("Some query data received");
        }
        break;

      default:
        res.end(`${parsedUrl.pathname}: Not Found\n`);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
