const db = require('../connectPg.js');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 6;
let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
const userController = {};

userController.signUp = (req, res, next) => {
    console.log('inside signup');
    const { username, password } = req.body;
    //generate salt using genSaltSync
    //reassign password to the result of hash syncing with salt
    const hashPass = bcrypt.hashSync(password, salt);
    console.log("PASSWORD", hashPass)
    const params = [username, hashPass];
    const addQuery = `INSERT INTO userTable(username, password) VALUES ($1, $2)`;
    db.query(addQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

userController.logIn = (req, res, next) => {

    const { username, password } = req.body;
    const params = [username]
    const getQuery = `SELECT * FROM usertable WHERE username = $1`;
    db.query(getQuery, params)
        .then((user) => {
            res.locals.username = user.rows[0].username
            if (bcrypt.compareSync(password, user.rows[0].password)) next()
            else next({message: `incorrect username/password combination!`})
        })
        .catch((err) => {return next(err)})
}

module.exports = userController;