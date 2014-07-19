var express = require('express'),
    logfmt = require('logfmt');

var app = express();

app.use(logfmt.requestLogger());

app.get("/", function (req, res){
    res.send("Hello World!");
});

app.post("/rest/doLogin", function(req, res) {
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
