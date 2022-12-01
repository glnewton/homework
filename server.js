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
    let tipPercentage = req.params.tipPercentage;
    let tip = total * (tipPercentage/100)
    res.send("The total is: $" + req.params.total + "\n" + 
             "The tip percentage is: " + req.params.tipPercentage + "%" + "\n" +
             "The tip is: $" + tip
             );
});

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});