var router = require('express').Router();
var logger = require('winston');

var validator = require('../middleware/validator')('user');
var httpCodes = require('../utils/http-codes');
var User = require('../models/user');


router.get('/api/user',
  validator('basic'),
  function(req, res) {
    res.status(httpCodes.OK).send({message: 'Route ok'});
  }
);

module.exports = router;
