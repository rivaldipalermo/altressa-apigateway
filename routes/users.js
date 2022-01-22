const express = require('express');
const router = express.Router();
const userHandler = require('./handler/user');
const verifyToken = require('../middlewares/verifyToken');

/* GET home page. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.put('/', verifyToken, userHandler.update);
router.get('/', verifyToken, userHandler.getUser);
router.post('/logout', verifyToken, userHandler.logout);

module.exports = router;
