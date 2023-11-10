const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter the text</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
    res.write("<html>");
    return res.end();
  }

  console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJs</title></head>");
  res.write("<body></h3>This is my NodeJS Server.....</h3></body>");
  res.write("<html>");
  res.end();
});

server.listen(3000);
