var express = require('express');
var bodyParser = require('body-parser');

require('./utils/builtinsExtension');

var app = express();

require('./logger')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routers
app.use('/', require('./routes/user'));

app.use(require('./middleware/404handler'));
app.use(require('./middleware/errorHandler')(app));

module.exports = app;
