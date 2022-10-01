const db = require('../connectPg.js');

const userController = {};

userController.signUp = (req, res, next) => {
    console.log('inside signup');
    const { username, password } = req.body;
    const addQuery = `INSERT INTO userTable(username, password) VALUES ('${username}', '${password}')`;
    db.query(addQuery)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

userController.logIn = (req, res, next) => {
    console.log('inside login');
    const { username, password } = req.body;
    const getQuery = `SELECT username FROM userTable WHERE username = '${username}' AND password = '${password}'`;
    db.query(getQuery)
        .then((user) => {
            res.locals.username = user.rows[0].username
            return next()})
        .catch((err) => {return next(err)})
}

module.exports = userController;