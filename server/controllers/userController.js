const db = require('../models/models')

const userController = {};

//****** cookieChecker ******//
userController.cookieChecker = async function (req, res, next) {
  
  
  


  try {
    if (!req.cookies.user) {
      const usercodeGen = [Math.floor(Math.random() * 89999 + 10000)]
      const addUserQuery = `INSERT INTO users ( highscores, usercode) VALUES ('[]', $1)`;
      const newUser = await db.query(addUserQuery, usercodeGen);
      res.locals.test = newUser;
      res.cookie(
        'user', 
        usercodeGen.toString(), 
        {
          expires: new Date(Date.now() + 900000000000), httpOnly: true
        })
    } else {
      const highscoresQuery = 'SELECT highscores from users WHERE usercode = $1';
      const user = req.cookies.user;
      const highscores = await db.query(highscoresQuery, user);
      res.locals.test  = highscores;
    }
    
    return next();
  } catch (err) {
    const error = {
      log: 'userController.cookieChecker error',
      message: 'check log for error'
    }
    return next(error)
  }
  
  
  
}


module.exports = userController;