const main = {
  workMain: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Work</title>
    </head>
    <body>
      <form action="/submit" method="POST">
        <label for="title">제목 :</label><br />
        <input type="text" id="title" name="title" /><br /><br />
        <label for="content">내용 :</label><br />
        <textarea name="content" id="content"></textarea><br /><br />
        <input type="submit" value="submit" />
      </form>
      <h1>Stress 내역</h1>
      <div></div>
    </body>
  </html>`,

  dataMain: `<!DOCTYPE html>
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
  </html>`,
}

module.exports = main