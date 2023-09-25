const { Router } = require('express');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.cookieChecker, (req, res) => {
  return res.status(200).json(res.locals.test);
})

module.exports = router;