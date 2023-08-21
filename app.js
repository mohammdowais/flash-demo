const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');


var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
  secret:'mysecretkey',
  saveUninitialized: true,
  resave: true,
}));

app.use(flash());


app.get('/', function(req, res){
  const message = req.flash('message')
  res.render('index', { message: message });
});

app.get('/success-flash', function(req, res){
  req.flash('message', ['User added successfully!','success'])
  res.redirect('/');
});

app.get('/no-flash', function(req, res){
  res.redirect('/');
});

app.get('/error-flash', function(req, res){
    req.flash('message', ['some error occured', 'danger']);
    res.redirect('/');
});

app.listen(3000,_=>console.log("server started"));