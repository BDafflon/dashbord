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
	console.log('req.session', req.session);
	 if(req.session.login==false){
		 console.log('hello world');
		res.sendFile(path.join(__dirname + '/public/login.html'));
	 }
	 else{
		 console.log('hello world2');
		 req.session.login = true;
		 res.sendFile(path.join(__dirname + '/public/index.html'));
	 }
})