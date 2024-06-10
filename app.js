const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
// const stress = require("./stress");
const b = `<!DOCTYPE html>
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

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const first = fs.readFileSync('./public/index.html', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(first);
      res.end();
    }

    if (req.url === '/index.html') {
      const index1 = fs.readFileSync('./public/index.html', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(index1);
      res.end();
    }

    if (req.url === '/index.css') {
      const index2 = fs.readFileSync('./public/index.css', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=uft-8');
      res.write(index2);
      res.end();
    }

    if (req.url === '/work.html') {
      const work = fs.readFileSync('./public/work.html', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(work);
      res.end();
    }

    if (req.url === '/public/work.html') {
      const work1 = fs.readFileSync(`./public/work.html`, 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(work1);
      res.end();
    }

    // if(req.url === `/public/${title}.html`) {
    //   const work2 = fs.readFileSync(`./data/${title}.html`, "utf8");

    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/html; charset=uft-8');
    //   res.write(work2);
    //   res.end();
    // }

    //  POST

    console.log(req.url);
  } else if (req.method === 'POST') {
    if (req.url === '/submit') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        let a = qs.parse(body);
        let title = a.title;
        let content = a.content;

        // let filedata = fs.readdir(`./data`, 'utf-8', (err, fileList) => {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     console.log(fileList);
        //   }
        // });

        let c = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Work</title>
        </head>
        <body>
          <form action="/submit" method="POST">
            <label for="title">제목 :</label><br>
            <input type="text" id="title" name="title"><br><br>
            <label for="content">내용 :</label><br>
            <textarea name="content" id="content"></textarea><br><br>
            <input type="submit" value="submit">
          </form>

          <h1>Stress 내역</h1>

          <ul id=list>
            <li>${file}</li>
          </ul>

          </script>

        </body>
        </html>`;

        fs.writeFile(`./data/${title}.html`, b, (err) => {
          if (err) {
            console.log('Error');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(b);
        });

        fs.writeFile(`./data/work2.html`, c, (err) => {
          if (err) {
            console.log('Error');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(c);
        });



        // fs.writeFile('./public/work.html', c, (err) => {
        //   if (err) {
        //     console.log('Error');
        //     return;
        //   }
        //   res.statusCode = 200;
        //   res.setHeader('Content-Type', 'text/html; charset=utf-8');
        //   res.end(b);
        // });
      });
    }
  }
});

const PORT = 3000;
server.listen(PORT, function (err) {
  if (err) {
    console.log('Error');
  }
  console.log('서버 돌아감');
  console.log(`http://localhost:${PORT}`);
});
