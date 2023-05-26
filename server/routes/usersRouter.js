const { Router } = require('express');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/login', userController.login, (req, res) => {
  res.status(200).json(res.locals.test);
})

module.exports = router;