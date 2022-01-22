const express = require('express');
const router = express.Router();
const refreshTokenHandler = require('./handler/refresh-token');

/* GET home page. */
router.post('/', refreshTokenHandler.refreshToken);

module.exports = router;
