import mongoose from 'mongoose';
import logger from 'winston';
import BPromise from 'bluebird';

import config from 'config';


const DB_CONFIG = config.get('mongo');
const LOG_PREFIX = 'MongoDB |';

// Replacing default mongoose promise with bluebird
mongoose.Promise = BPromise;

// Uncomment this when you want to debug mongoose. This is very useful for weird bugs :)
//mongoose.set('debug', true);

var db = mongoose.connection;
var isConnecting = false;

function connect() {
  isConnecting = true;
  mongoose.connect(DB_CONFIG.address + DB_CONFIG.database, {}, (error) => {
    if (error) {
      mongoose.disconnect();
      setTimeout(connect, 5000);
    }
  });
}


db.on('open', () => {
  logger.info(LOG_PREFIX, `connection opened to: ${DB_CONFIG.address}, db_name: ${DB_CONFIG.database}`);
  isConnecting = false;
});

db.on('disconnected', () => {
  logger.error(LOG_PREFIX, 'disconnected');
  if (!isConnecting) {
    connect();
  }
});

db.on('connecting', () => logger.info(LOG_PREFIX, 'connecting'));
db.on('error', (error) => logger.error(LOG_PREFIX, error));
db.on('close', () => logger.error(LOG_PREFIX, 'close'));


exports.connect = connect;
