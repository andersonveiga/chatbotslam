var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/webhook/verify', function(req, res) {
  // console.log(req.query['hub.challenge']);
  res.send(req.query['hub.challenge'])
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})