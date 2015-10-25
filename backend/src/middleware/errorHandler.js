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
  // Note: Do not remove next param!
  return function(err, req, res, next) {
    if (app.get('env') === 'production') {
      productionHandler(err, res);
    } else {
      developmentHandler(err, res);
    }
  };
};
