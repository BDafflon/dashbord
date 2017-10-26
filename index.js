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
app.use(session({secret: 'openCPSCookies'}));

// Routes
 
app.get('/', function(req, res) {
	console.log('start');
	console.log('req.session', req.session);
	res.sendFile(path.join(__dirname + '/public/index.html'));
	  
})