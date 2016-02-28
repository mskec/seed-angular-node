import path from 'path';
import httpLogger from 'morgan';
import winston from 'winston';
import FileStreamRotator from 'file-stream-rotator';
import moment from 'moment';
import config from 'config';
import mkdirp from 'mkdirp';


module.exports = function(app) {
  winston.remove(winston.transports.Console);
  winston.add(
    winston.transports.Console,
    {
      colorize: true,
      timestamp: function() {
        return app.get('env') === 'production' ? moment().toISOString() : moment().format('HH:mm:ss.SSS');
      }
    }
  );

  if (app.get('env') === 'development') {
    app.use(httpLogger('dev'));

  } else {
    app.use(productionLogger());
  }
};


function productionLogger() {
  var productionLogFormat = [
    ':req[x-forwarded-for]',      // We are behind reverse proxy, this is real request ip address
    '-',
    ':remote-user',
    '[:date[clf]]',
    '":method :url HTTP/:http-version"',
    ':status',
    ':res[content-length]',
    '":referrer"',
    '":user-agent"',
    ':response-time ms'
  ].join(' ');

  mkdirp.sync(config.get('log.access_log'));

  var accessLogStream = FileStreamRotator.getStream({
    filename: path.join(config.get('log.access_log'), 'access-%DATE%.log'),
    frequency: 'daily',
    date_format: 'YYYYMMDD',
    verbose: false
  });

  return httpLogger(productionLogFormat, {stream: accessLogStream});
}
