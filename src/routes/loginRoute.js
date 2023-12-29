const router = require('express').Router();

router.get('/', (req, res) => {
    const {accessToken,refreshToken} = req.cookies;
    if(accessToken && refreshToken){
        return res.redirect('/');
    }
    res.render('auth/login');
});

module.exports = router;