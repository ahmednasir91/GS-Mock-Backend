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
            success: true,
            data: {
                session_id: "abcdefgh"
            }
        });
    else
        res.send({
            success: false,
            data: {
                "error_code": 1000,
                "message": "Invalid username or password"
            }
        });
});

app.get('/rest/synchData', function(req, res) {

    var sessionId = req.body.session_id;
    var lastUpdated = req.body.last_updated;

    res.send({
          "success": true,

          "data": {
             "current_time": "2014-07-14 19:43:37 +0500",
             "locations": [
                 {
                   "id": 1,
                   "name": "Name of Location",
                   "wing": "Allowed Wing",
                   "grades": [
                       "V",
                       "VI"
                   ]
                 },
                 {
                   "id": 2,
                   "name": "Name of Location",
                   "wing": "Allowed Wing",
                   "grades": [
                       "V",
                       "VI"
                   ]
                 }
               ],
             "students": [
                 {
                   "id": 1,
                   "tag_id": "abcdefgh",
                   "gs_number": "010-1000",
                   "grade": "V",
                   "gen_group": "B",
                   "wing": "Middlers",
                   "official_name": "Shahzad Fateh Ali",
                   "image": "base64 encoded image"
                 },
                 {
                   "id": 2,
                   "tag_id": "abcdefgh",
                   "gs_number": "010-1000",
                   "grade": "V",
                   "gen_group": "B",
                   "wing": "Middlers",
                   "official_name": "Shahzad Fateh Ali",
                   "image": "base64 encoded image"
                 }
               ],
             "schedules": [
                 {
                   "grade": "V",
                   "late_time": "2014-07-14 19:43:37 +0500"
                 },
                 {
                   "grade": "VI",
                   "late_time": "2014-07-14 19:43:37 +0500"
                 }
               ]
          }
    });
});

var port = Number(process.env.PORT || 5000);
console.log("Listening on " + port + " ...")
app.listen(port);
