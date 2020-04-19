
const express = require("express");
var cors = require('cors');
const imageData = require("./imageData");
const fs = require("fs");
const app = express();
app.use(cors());

// Debugging API Endpoint
app.get("/api", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(imageData));
});

app.listen(3000, function () {
  console.log("Example app listening on port http://localhost:3000");
});