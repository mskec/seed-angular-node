import express from 'express';
import bodyParser from 'body-parser';

import './utils/builtins-extension';

var app = express();

require('./logger')(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routers
app.use('/', require('./routes/user'));

app.use(require('./middleware/404-handler'));
app.use(require('./middleware/error-handler').use);

module.exports = app;
