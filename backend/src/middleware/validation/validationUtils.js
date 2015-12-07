var validator = require('validator');

exports.notNull= function(objectForTesting, errorMessage) {
  if (validator.isNull(objectForTesting) === true) {
    throw new Error(errorMessage || 'Object is null!');
  }
};

exports.isMongoId = function(objectForTesting) {
  if (validator.matches(objectForTesting, /^[0-9a-fA-F]{24}$/) === false) {
    throw new Error(objectForTesting + ' is not valid Mongo Id string!');
  }
};

exports.notEmptyString = function(stringForTesting, errorMessage) {
  if (stringForTesting.length === 0) {
    throw new Error(errorMessage || 'String is empty string!');
  }
};

exports.isDefined = function(objectForTesting, errorMessage) {
  if (!objectForTesting) {
    throw new Error(errorMessage || 'Object is undefined');
  }
};

exports.is = function(objectForTesting1, objectForTesting2, errorMessage) {
  if (validator.equals(objectForTesting1, objectForTesting2) === false) {
    throw new Error(errorMessage || 'Object1 is not equal to object2!');
  }
};

exports.isArray = function(object, errorMessage) {
  if (!Array.isArray(object)) {
    throw new Error(errorMessage || object + ' is not array.');
  }
};

exports.isNumberGreaterThanZero = function(number, errorMessage) {
  if (typeof number !== 'number' || number < 0) {
    throw new Error(errorMessage || number + ' is not a number greater than zero.');
  }
};

exports.isNumber = function (number, errorMessage) {
  if (typeof(number) !== 'number') {
    throw new Error(errorMessage || number + ' is not a number.');
  }
};

exports.isDate = function(dateStr, errorMessage) {
  if (!validator.isDate(dateStr)) {
    throw new Error(errorMessage || dateStr + 'is not a date.');
  }
};

exports.isBefore = function(date1, date2, errorMessage) {
  if (!validator.isBefore(date1, date2)) {
    throw new Error(errorMessage || date1 + ' is not before ' + date2);
  }
};

exports.isNotInPast = function(date1, errorMessage) {
  if (!validator.isBefore(date1)) {
    throw new Error(errorMessage || date1 + ' is in the past.');
  }
};

exports.isIn = function(object, arrayOfObjects, errorMessage) {
  if (validator.isIn(object, arrayOfObjects) === false) {
    throw new Error(errorMessage || 'Object is not part of the array!');
  }
};

exports.isInRange = function(string, min, max, errorMessage) {
  if (!validator.isLength(string, min, max)) {
    throw new Error(errorMessage || string + ' is not in range [' + min + ', ' + max + ']' );
  }
};

exports.matches = function(string1, string2, errorMessage) {
  if (validator.matches(string1, string2) === false) {
    throw new Error(errorMessage || 'String1 doesn\'t match string2!');
  }
};

exports.isExpectedType = function(objectForTesting, typename, errorMessage) {
  if (typeof objectForTesting !== typename) {
    throw new Error(errorMessage || objectForTesting + ' has to be of type ' + typename);
  }
};

exports.greaterThanOrEqual = function(value1, value2, errorMessage) {
  if (value1 < value2) {
    throw new Error(errorMessage || 'Value1 has to be greater than or equal to value2');
  }
};

// Throws error if value1 is bigger than value2
exports.notGreaterThan = function(value1, value2, errorMessage) {
  if (value1 > value2) {
    throw new Error(errorMessage || 'Value1 is bigger than value2!');
  }
};

exports.checkLength = function(text, length) {
  if (text.length > length) {
    throw new Error('Text: "' + text + '" has more than ' + length + ' characters!');
  }
};

exports.isURL = function(url, errorMsg) {
  if (!validator.isURL(url)) {
    throw new Error(errorMsg || 'Invalid URL: ' + url);
  }
};

exports.startsWith = function(str, startsWith, errorMsg) {
  exports.isDefined(str);

  if (!str.startsWith(startsWith)) {
    throw new Error(errorMsg || str + ' does not start with ' + startsWith);
  }
};
