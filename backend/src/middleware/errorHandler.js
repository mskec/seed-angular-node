var httpCodes = require('../utils/httpCodes');


// development error handler, will print stacktrace
function developmentHandler(err, res) {
  res.status(err.status || httpCodes.INTERNAL_SERVER_ERROR);
  res.send({message: err.message, error: err});
}


// production error handler, no stacktraces leaked to user
function productionHandler(err, res) {
  res.status(err.status || httpCodes.INTERNAL_SERVER_ERROR);
  res.send({message: err.message, error: {}});
}


module.exports = function(app) {
  return function(err, req, res) {
    if (app.get('env') === 'development') {
      developmentHandler(err, res);
    } else {
      productionHandler(err, res);
    }
  };
};
