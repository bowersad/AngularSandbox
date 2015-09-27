var express = require('express');
var app     = express();

app.get('/', function (req, res) { 
  res.write('Hello sworld');
  console.log('you made it'); 
}).listen(3000);
