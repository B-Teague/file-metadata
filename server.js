// server.js
// where your node app starts

// init project
var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer({ dest: './tmp' });
//var storage = multer.memoryStorage();
//var upload = multer({ storage: storage });

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.post("/upload",upload.single('testFile'), function (request, response) {
  response.send({size: request.file.size});

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
