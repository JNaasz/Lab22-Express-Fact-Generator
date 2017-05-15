var express = require('express');
var app = express();


var random = require('./facts.js');

app.use(express.static(__dirname + '/Public'));

app.get('/api/randomFact', function (req, res) {
  var factObject = random.lakes[Math.floor(Math.random()*random.lakes.length)];
  res.send(factObject);
});

app.get('/api/allFacts', function (req, res) {
  res.send(random.lakes);
});



var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);
});
