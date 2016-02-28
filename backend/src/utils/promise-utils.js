import errorHandler from './error-handler';

exports.handleError = function(res) {
  return function(err) {
    if (!res.headersSent) {
      errorHandler.res(err, res);
    }
  };
};
