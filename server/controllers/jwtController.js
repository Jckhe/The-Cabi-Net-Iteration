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
    res.locals.token = token;
    return next();
}


jwtController.validateToken = (req, res, next) => {
    //set header and secret keys from the process .env file
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    //set token to the request header with the key of tokenHeaderKey
    const token = req.header(tokenHeaderKey);
    //save the result of invoking the jwt.verify function in verified
    const verified = jwt.verify(token, jwtSecretKey);
    //if condition checking the verification results.
    if(verified){
        return next()
    }else{
        // Access Denied
        return next({message: 'error!'})
    }
}

module.exports = jwtController;