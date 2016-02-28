import httpCodes from '../utils/http-codes';

module.exports = function(validationType) {
  return function(validationMethod) {
    return function(req, res, next) {

      // Check if there is validation for that type with validation method
      var validationModule = require('./validation/' + validationType);
      if (!validationModule || !validationModule[validationMethod]) {
        return res.status(httpCodes.INTERNAL_SERVER_ERROR).send({error: 'Server validation is not responding now!'});
      }

      try {
        validationModule[validationMethod](req);
      } catch(e) {
        return res.status(httpCodes.BAD_REQUEST).send({error: e.message});
      }

      return next();
    };
  };
};
