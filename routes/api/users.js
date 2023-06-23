
const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')



//* POST


// function ensureLoggedIn(req, res, next) {
//     if (!req.user) return res.status(401).json('Unauthorized');
//     next();
//   };

// async function checkToken(req, res) {
//     res.json(req.exp)
// }

router.post('/', usersCtrl.create);
// when post request made to path '/', create method from users control is invoked , 

router.post('/login', usersCtrl.login)



router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
//checks validity of token when get request is made. middleware ensureLoggedIn is invoked to see if user is logged in, if user is logged in, then checkToken will handle the request 

module.exports = router;