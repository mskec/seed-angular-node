var httpCodes = require('../utils/httpCodes');


// catch 404 and forward to error handler
module.exports = function(req, res, next) {
  var err = new Error('Not Found');
  err.status = httpCodes.NOT_FOUND;
  next(err);
};
