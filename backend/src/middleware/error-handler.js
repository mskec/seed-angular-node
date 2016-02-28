import httpCodes from '../utils/http-codes';


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

exports.res = function(err, res) {
  if (process.env.NODE_ENV === 'production') {
    productionHandler(err, res);
  } else {
    developmentHandler(err, res);
  }
};

// Note: Do not remove next param!
exports.use = function(err, req, res, next) {
  exports.res(err, res);
};
