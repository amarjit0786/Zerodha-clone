const { Signup, Login } = require('../Controllers/AuthController');
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require('express').Router();

router.post('/',userVerification)
router.post('/signup', Signup)
router.post('/login', Login)

router.get('/dashboard', userVerification, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' });
});


module.exports = router