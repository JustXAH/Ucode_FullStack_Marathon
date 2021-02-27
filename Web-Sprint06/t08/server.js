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
        name: "",
        email: "",
        age: "",
        description: "",
        photo: "",
    });
});

app.post("/",urlencodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    else {
        if (req.body.name === "" && req.body.email === "" && req.body.age === ""
            && req.body.description === "" && req.body.photo === "") {
            res.render("hero_form.html", {
                name: "ERROR, form is empty!",
                email: "ERROR, form is empty!",
                age: "ERROR, form is empty!",
                description: "ERROR, form is empty!",
                photo: "ERROR, form is empty!",
            })
        }
        else {
            res.render("hero_form.html", {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                description: req.body.description,
                photo: req.body.photo,
            })
        }
    }

})

app.listen(process.env.PORT || 8000, () =>{
    console.log('Server listening on port 8000...');
})