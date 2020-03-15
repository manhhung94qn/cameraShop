const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const passport = require('passport');
const querystring = require('querystring');

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile', 'openid'] }));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    async function (req, res) {
        const userGo = req.user;
        const userDb = await User.findByGoogleId(userGo.id);
        if (userDb) {
            const token = await userDb.generateAuthToken();
            let dateNow = new Date();
            res.cookie('n_token_key', token,
            {
                maxAge: new Date(dateNow.getFullYear()+1,dateNow.getMonth(),dateNow.getDate())
            });
        } else {
            let email = userGo.emails[0].value;
            let username = userGo.emails[0].value.replace(/\@.+\..+/, '');
            const userDb2 = await User.findOne({
                email: email.toLowerCase()
            });
            if (userDb2) {
                userDb2.google.id = userGo.id;
                const token = await userDb2.generateAuthToken();
                await userDb2.save();
                let dateNow = new Date();
                res.cookie('n_token_key', token,
                    {
                        maxAge: new Date(dateNow.getFullYear() + 1, dateNow.getMonth(), dateNow.getDate())
                    });
            } else {
                const user = new User();
                user.fullname = (userGo.name.familyName || '') + (userGo.name.middleName || '');
                user.username = username;
                user.email = email;
                user.avatar = userGo.photos[0] ? userGo.photos[0].value : '';
                user.password = 'hungking.IO';
                user.google.id = userGo.id;
                await user.save();
                const token = await user.generateAuthToken();
                let dateNow = new Date();
                res.cookie('n_token_key', token,
                    {
                        maxAge: new Date(dateNow.getFullYear() + 1, dateNow.getMonth(), dateNow.getDate())
                    });
            }
        }
        res.redirect('/');
    });


router.get('/facebook',
    passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));//,'user_gender','user_link','user_location'] }));

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
    async function (req, res) {
        const userFb = req.user;
        const userDb = await User.findByFacebookId(userFb.id);

        if (userDb) {
            const token = await userDb.generateAuthToken();
            let dateNow = new Date();
            res.cookie('n_token_key', token,
            {
                maxAge: new Date(dateNow.getFullYear()+1,dateNow.getMonth(),dateNow.getDate())
            });
        } else {
            let email = userFb.emails[0].value;
            let username = userFb.emails[0].value.replace(/\@.+\..+/, '');
            const userDb2 = await User.findOne({
                email: email.toLowerCase()
            })
            if (userDb2) {
                userDb2.facebook.id = userFb.id;
                const token = await userDb2.generateAuthToken();
                await userDb2.save();
                let dateNow = new Date();
            res.cookie('n_token_key', token,
            {
                maxAge: new Date(dateNow.getFullYear()+1,dateNow.getMonth(),dateNow.getDate())
            });
            } else {
                const user = new User();
                user.fullname = (userFb.name.familyName || '') + (userFb.name.middleName || '') + (userFb.name.givenName || '');
                user.username = username;
                user.email = email;
                user.avatar = userFb.photos[0] ? userFb.photos[0].value : '';
                user.password = 'hungking.IO';
                user.facebook.id = userFb.id;
                await user.save();
                const token = await user.generateAuthToken();
                let dateNow = new Date();
            res.cookie('n_token_key', token,
            {
                maxAge: new Date(dateNow.getFullYear()+1,dateNow.getMonth(),dateNow.getDate())
            });
            }
        }
        res.redirect('/');
    });

module.exports = router;



