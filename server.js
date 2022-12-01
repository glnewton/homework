const express = require("express");

const app = express();

const PORT = 3000;

app.get("/greeting", function (req, res) {
    res.send("Hello, stranger");
});

app.get("/greeting/:name", function (req, res) {
    res.send("Wow! Hello there, " + req.params.name);
});

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
  });