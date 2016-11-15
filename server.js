var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
})
