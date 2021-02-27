const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const engines = require('consolidate');

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");

app.get("/",urlencodedParser, function (req, res) {
    res.render("index", {
        result: " "
    });
});

app.post("/",urlencodedParser, function (req, res) {
    if(!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    // если ответ правильный рендерим result
    if (req.body.answer === "correct") {
        res.render("hero_form.html", {
            result: "You're right! You are a true fan of the Avengers!"
        })
    } else {
        res.render("hero_form.html", {
            result: "Shame on you! Go and watch Avengers!"
        })
    }
})

app.listen(process.env.PORT || 8000, () =>{
    console.log('Server listening on port 8000...');
})