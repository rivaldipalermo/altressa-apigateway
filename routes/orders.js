const express = require('express');
const router = express.Router();
const orderHandler = require('./handler/orders');

router.get('/', orderHandler.get);

module.exports = router;
