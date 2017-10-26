var port = process.env.PORT || 3000;
const express = require('express'),
	  session = require('express-session'),
	  cookieParser = require('cookie-parser'),
      app     = express(),
      server  = require('http').createServer(app).listen(port),
      io      = require('socket.io')(server),
      path    = require('path');
 
	
// Dossier static
app.use(express.static(__dirname + '/public'));
 
// session
app.use(cookieParser());
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));


//login
function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}


// Routes
app.get('/', function(req,restrict, res) {
 
	res.sendFile(path.join(__dirname + '/public/index.html'));
	  
})