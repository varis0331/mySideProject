const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // 解決跨域問題

app.get("/", (req, res) => {
  res.send("Hello from Node.js Backend!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
