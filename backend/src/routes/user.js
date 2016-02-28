const router = require('express').Router();
import logger from 'winston';

const validator = require('../middleware/validator')('user');
import httpCodes from '../utils/http-codes';
import User from '../models/user';


router.get('/api/user',
  validator('basic'),
  function(req, res) {
    res.status(httpCodes.OK).send({message: 'Route ok'});
  }
);

module.exports = router;
