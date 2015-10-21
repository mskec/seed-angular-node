#!/usr/bin/env node
var config = require('config');
var logger = require('winston');

var app = require('./app');
var mongo = require('./datastores/mongo');


app.set('port', config.get('host.port') || 3000);

app.listen(app.get('port'), function() {
  logger.info('Backend listening on port ' + app.get('port'));

  mongo.connect();
});
