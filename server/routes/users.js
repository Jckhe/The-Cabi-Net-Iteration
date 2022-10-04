const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.post('/signup', userController.signUp, (req, res) => {
    console.log('creating user');
    res.status(200).send("howdy hackxolotl")
})

router.post('/login', userController.logIn, (req, res) => {
    console.log('logging in');
    res.status(200).send(`${res.locals.username} IS LOGGED IN`)
})

module.exports = router;