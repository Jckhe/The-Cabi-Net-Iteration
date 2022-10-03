const db = require('../connectPg.js');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const userController = {};

userController.signUp = (req, res, next) => {
    console.log('inside signup');
    const { username } = req.body;
    const hashPass = bcrypt.hashSync(`${req.body.password}`, salt);
    const params = [username, hashPass];
    const addQuery = `INSERT INTO userTable(username, password) VALUES ($1, $2)`;
    db.query(addQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

userController.logIn = (req, res, next) => {
    console.log('inside login');
    const { username } = req.body;
    const hashPass = bcrypt.hashSync(`${req.body.password}`, salt);   
    const params = [ username, hashPass ];
    const getQuery = 'SELECT username FROM userTable WHERE username = $1 AND password = $2';
    db.query(getQuery, params)
        .then((user) => {
            res.locals.username = user.rows[0].username
            return next()})
        .catch((err) => {return next(err)})
}

module.exports = userController;