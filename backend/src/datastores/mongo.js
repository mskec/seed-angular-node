import mongoose from 'mongoose';
import logger from 'winston';

import config from 'config';


exports.connect = function() {
  var mongoUrl = config.get('mongo.address') + config.get('mongo.database');

  mongoose.connect(mongoUrl, {server: {auto_reconnect: true }});
  var connection = mongoose.connection;

  // Define events
  connection.on('connecting', function () {
    logger.info('Connecting to mongo url', mongoUrl);
  });

  connection.on('error', function (error) {
    logger.error('Error in mongo connection: ' + error);
    mongoose.disconnect();
  });

  connection.on('connected', function () {
    logger.info('Mongo connection established');
  });

  connection.once('open', function () {
    logger.info('Mongo connection opened');
  });

  connection.on('reconnected', function () {
    logger.info('Mongo reconnected');
  });

  connection.on('disconnected', function () {
    logger.info('Mongo disconnected');
    mongoose.connect(config.MONGO_CONNECTION);
  });
};
