var express = require('express');
var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');

//app.use(express.static(publicDir))

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port);
