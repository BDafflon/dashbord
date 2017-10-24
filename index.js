var port = process.env.PORT || 3000;
const express = require('express'),
      app     = express(),
      server  = require('http').createServer(app).listen(port),
      io      = require('socket.io')(server),
      path    = require('path');
 
	
// Dossier static
app.use('/css', express.static('/public/dashbord/css'));
 
// Routes
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/public/dashbord/index.html'));
})