const jwt = require('jsonwebtoken');

const jwtController = {};

jwtController.setToken = (req, res, next) => {
    //validate user in the middleware BEFORE
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    //data we want to save inside the token to make it unique.
    let data = {
        time: Date(),
        userId: res.locals.username,
    }
    //save the result of jwt.sign() and pass into the res.locals variable
    const token = jwt.sign(data, jwtSecretKey);
    console.log("JWT TOKEN SET!")
    res.locals.token = token;
    return next();
}


jwtController.validateToken = (req, res, next) => {
    //import the secret key from process.env
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    //save the result of invoking the jwt.verify function in verified
    const verified = jwt.verify(req.cookies.JWT, jwtSecretKey);
    //if condition checking the verification results.
    if(verified){
        console.log("JWT TOKEN VALID!")
        return next()
    }else{
        // Access Denied
        return next({message: 'error!'})
    }
}

module.exports = jwtController;