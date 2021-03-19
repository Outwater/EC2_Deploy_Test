const express = require("express");
const http = require("http");
const app = express();

app.use("/", (req, res) => {
  res.send("hello world~");
});

http.createServer(app).listen(5000, () => {
  console.log("server on 5000");
});
