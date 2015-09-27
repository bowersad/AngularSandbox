var express = require('express');
var app     = express();

app.get('/', function (req, res) { 
  res.send('Hello sworld');
}).listen(3000, function () {
  console.log('you made it'); 	
});
