#!/usr/bin/env node
import config from 'config';
import logger from 'winston';

import app from './app';
import mongo from './datastores/mongo';


app.set('port', config.get('host.port') || 3000);

app.listen(app.get('port'), function() {
  logger.info('Backend listening on port ' + app.get('port'));

  mongo.connect();
});
