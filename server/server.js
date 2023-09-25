const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./models/models')

const app = express();
app.use(cookieParser())

//****** ROUTES ******//
const users = require('./routes/usersRouter')

//****** PORT ******//
const PORT = 3000;

//****** FILTERS ******//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//****** REQUESTS ******//
app.use('/api', users);


//****** ERROR HANDLERS ******//

app.use('*', (req, res) => res.status(404).json("ERROR 404: not found"));

app.use( (err, req, res, next) => {
  const errObj = {};
  const defaultErr = {
    message: "server error",
    error: 500,
    log: "something went terribly wrong 0_o"
  }
  Object.assign(errObj, defaultErr, err);
 return next(errObj);
})

app.listen(PORT, () => {
  if (db){ 
    console.log('database connection successful')
} else { 
  console.log('database connection unsuccessful')
}
  console.log(`server listening on PORT:${PORT}`)
});