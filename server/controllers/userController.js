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

module.exports = userController;