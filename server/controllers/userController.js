const db = require('../connectPg.js');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 6;
let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
const userController = {};

userController.signUp = (req, res, next) => {
    console.log('inside signup');
    const { username, password } = req.body;
    //assign password to the result of hash syncing with salt
    const hashPass = bcrypt.hashSync(password, salt);
    res.locals.username = username;
    const params = [username, hashPass];
    const addQuery = `INSERT INTO userTable(username, password) VALUES ($1, $2)`;
    db.query(addQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

userController.logIn = (req, res, next) => {
    //deconstruct the request body
    const { username, password } = req.body;
    console.log("USERCONTROLLER LOGIN: ", req.body)
    //pass in parameters with only username needed.
    const params = [username]
    const getQuery = `SELECT * FROM usertable WHERE username = $1`;
    db.query(getQuery, params)
        .then((user) => {
            //save username to res.locals
            res.locals.username = user.rows[0].username
            //use bcrypt.compareSync to check if the password inputted is equal to the hashed PW.
            if (bcrypt.compareSync(password, user.rows[0].password)) next()
            else next({message: `incorrect username/password combination!`})
        })
        .catch((err) => {return next(err)})
}

module.exports = userController;