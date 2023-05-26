const userController = {};

//****** LOGIN ******//
userController.login = async function (req, res, next) {

  res.locals.test = 'howdy';
  return next();
}


module.exports = userController;