var express = require('express');
var app     = express();

app.get('/', function (req, res) { 
  res.render('index.jade', {
  	pageTitle : "Index"
  });
}).listen(3000, function () {
  console.log('you made it'); 	
});
