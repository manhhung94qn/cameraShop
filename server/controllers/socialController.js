const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const passport = require('passport');
const querystring = require('querystring');

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile', 'openid'] }));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    function (req, res) {
        const query = querystring.stringify({
            "id": req.user.id,
            "name": req.user.displayName
        });
        res.redirect('http://localhost:3000/auth/login/?' + query)
    });


router.get('/facebook',
    passport.authenticate('facebook', { scope: ['email', 'public_profile']}));//,'user_gender','user_link','user_location'] }));

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
    async function (req, res) {
        const userFb = req.user;
        console.log("fb",userFb);
        const userDb = await User.findByFacebookId(userFb.id);
        
        if(userDb){
            const token = await userDb.generateAuthToken();
            res.cookie('n_token_key', token);
        } else {
            // if (await User.exists({
            //     $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }]
            // })) {
            //     throw "Email or Username is already exists";
            // }
            const user = new User();
            user.fullname = (userFb.name.familyName||'') + (userFb.name.middleName|| '') + (userFb.name.givenName||'');
            user.username = userFb.emails[0].value.replace(/\@.+\..+/,'');
            user.email = userFb.emails[0].value;
            user.avatar = userFb.photos[0] ? userFb.photos[0].value: '';
            user.password = 'hungking.IO';
            user.facebook.id = userFb.id;
            await user.save();
            const token = await user.generateAuthToken();
            res.cookie('n_token_key', token);
        }
        const query = querystring.stringify({
            "id": req.user.id,
            "name": req.user.displayName
        });
        res.redirect('http://localhost:3000/auth/login/?' + query)
    });

module.exports = router;



