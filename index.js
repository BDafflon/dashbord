var port = process.env.PORT || 3000;
const express = require('express'),
      app     = express(),
      server  = require('http').createServer(app).listen(port),
      io      = require('socket.io')(server),
      path    = require('path');
 
	
// Dossier static
app.use(express.static(__dirname + '/public'));
 
// Routes
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/public/index.html'));
})