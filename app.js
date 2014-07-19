var express = require('express'),
    bodyParser = require('body-parser'),
    logfmt = require('logfmt');

var app = express();

app.use(bodyParser());


app.use(logfmt.requestLogger());

app.get("/", function (req, res){
    res.send("Hello World!");
});

app.post("/rest/doLogin", function(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    if(email == "abc@abc.com" && password == "123456")
        res.send({
            success: false,
            data: {
                "error_code": 1000,
                "message": "Invalid username or password"
            }
        });
    else
        res.send({
            success: true,
            data: {
                session_id: "abcdefgh"
            }
        });
});

var port = Number(process.env.PORT || 5000);
console.log("Listening on " + port + " ...")
app.listen(port);
