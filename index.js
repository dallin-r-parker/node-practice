var skittles = require('./skittles');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

console.log(skittles.title);
console.log(skittles.eat());

var books = [
    {
        title: 'The great divorce',
        author: 'CS Lewis'
    },
    {
        title: 'Little Brother',
        author: 'Unknown'
    },
    {
        title: 'Wild Sheep Chase',
        author: 'Aruki Marukami'
    }
];

app.get('/', function(request, response){
    response.send('Hello Everyone!');
});

app.get('/api/books', function(request, response){

    response.json(books);
});

app.post('/api/books', function(request, response){
    console.log('new book added', request.body);
    books.push(request.body);
    console.log(books);
    response.end();
});


app.listen(3000, function() {
  console.log('listening on port 3000');
});

///nothing
