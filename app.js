const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
// const stress = require("./stress");

// * 기본 양식
const workContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  
</head>
<body>
  <h1></h1>
  <div></div>
  <div><a href="./public/work.html">돌아가기</a></div>
</body>
</html>`;

// * 서버
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const first = fs.readFileSync('./public/index.html', 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/html; charset=uft-8' });
      res.end(first);
    }

    if (req.url === '/index.css') {
      const index2 = fs.readFileSync('./public/index.css', 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/css; charset=uft-8' });
      res.end(index2);
    }

    if (req.url === '/work.html') {
      const work = fs.readFileSync('./public/work.html', 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/html; charset=uft-8' });
      res.end(work);
    }

    if (req.url === '/public/work.html') {
      const work = fs.readFileSync('./public/work.html', 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/html; charset=uft-8' });
      res.end(work);
    }

    console.log(req.url);
  }
  if (req.method === 'POST') {
    if (req.url === '/submit') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        let a = qs.parse(body);
        let title = a.title;
        let content = a.content;

        let addTitle = workContent.replace('<h1></h1>', `<h1>${title}</h1>`);
        console.log(addTitle);
        let addContent = addTitle.replace('<div></div>', `<div>${content}</div>`);

        fs.writeFileSync(`./data/${title}.html`, addContent, 'utf-8');

        res.writeHead(200, { 'Content-Type': 'text/html; charset=uft-8' });
        res.end(addContent);
      });
    }
  }
});

// let filedata = fs.readdir(`./data`, 'utf-8', (err, fileList) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fileList);
//   }
// });

const PORT = 3000;
server.listen(PORT, function (err) {
  if (err) {
    console.log('Error');
  }
  console.log('서버 돌아감');
  console.log(`http://localhost:${PORT}`);
});
