const express = require('express');
// const path = require('path');
const app = express();
const spicesRouter = require('./routes/spices.js');
const usersRouter = require('./routes/users.js');

const dotenv = require('dotenv');
//middleware app.use functions
//parsing json, etc
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use('/spice', spicesRouter);
app.use('/users', usersRouter);


// ERROR HANDLERS
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});
  
app.use((req, res) => res.status(404).send('404, page/route does not exist !'));
// app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

app.listen(3000, () => {
  console.log('listening on port 3000')
});


dotenv.config();

module.exports = app;