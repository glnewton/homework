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


app.get('/magic/:question', function (req, res) {
    let randomReplies = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes definitely",
        "You may rely on it", 
        "As I see it yes", 
        "Most likely", 
        "Outlook good", 
        "Yes", 
        "Signs point to yes", 
        "Reply hazy try again", 
        "Ask again later", 
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again", 
        "Don't count on it", 
        "My reply is no", 
        "My sources say no", 
        "Outlook not so good", 
        "Very doubtful"
    ]
    let  getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    let randomReply = randomReplies[getRndInteger(1,20)-1]
    let question = req.params.question.replace("%20", " ")
    res.send("You asked: " + question + " The spirit says..." + randomReply);
});



app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});

