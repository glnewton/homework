const express = require("express");

const app = express();

const PORT = 3000;

app.get("/greeting", function (req, res) {
    res.send("Hello, stranger");
});

app.get("/greeting/:name", function (req, res) {
    res.send("Wow! Hello there, " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
    let total = req.params.total;
    let tipPercentage = req.params.tipPercentage/100;
    let tip = total * tipPercentage
    res.send("Wow! Hello there, " + req.params.name);
});

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});