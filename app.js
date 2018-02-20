var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(publicDir))

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.post('/register', function (req, res) {
    var name = req.body.name;
    res.render('register', { title: 'Register Status', message: 'Register Success!', name: name });
});

app.listen(port);
