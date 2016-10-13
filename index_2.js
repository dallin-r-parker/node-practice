var express = require('express');

var app = express()



function a(req, res, next){
  console.log('ayy');
  next();
}
function b(req, res, next){
  console.log('bee');
  next();
}
function c(req, res, next){
  console.log('cee');
  next();
}
function z(req, res, next){
  console.log('zeeee');
  res.send('donezo')
}

app.use(function(req, res, next) {
  console.log('Before Everything');
  next();
})


app.get('/api/abz', a, b, z);
app.get('/api/abz', a, z);











var port = 3030;
app.listen(port, function() {
  console.log('listening on port: ' + port);
})
