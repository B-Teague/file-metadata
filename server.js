const express = require('express');
const app = express();
const indexRoute = require(__dirname + '/routes/index');
const uploadRoute = require(__dirname + '/routes/upload');

app.set('json spaces', 2);
app.use(express.static('public'));
app.use('/', indexRoute);
app.use('/upload', uploadRoute);

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
