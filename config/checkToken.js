const jwt = require('jsonwebtoken');


//This is a middleware function used within server.js : app.use(require("./config/checkToken"));

module.exports = function(req, res, next) {
  // standard params for express middleware function

  let token = req.get('Authorization') || req.query.token;
//get token from request 'Authorization' header, if not found checkd token in query params

  if (token) {
    token = token.replace('Bearer ', '');
    //if token found, removes Bearer prefix from token
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      //jwt.verify() is called to verify token authenticity and decode the payload using process.env.SECRET 
      req.user = err ? null : decoded.user;  
      //if error occurs, req.user is null if not user is set to decoded.user -> user object extracted from token payload
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      //expiration set to null if error, if no error it sets the token expiration date
      return next();
      //called next() to proceed to next middleware
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};