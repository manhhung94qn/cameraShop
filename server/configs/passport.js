const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new GoogleStrategy({
    clientID: '849979619698-5i6vhjq6lcf47snoa1162lia5afmu3l7.apps.googleusercontent.com',
    clientSecret: 'ig2wZbAoSAWnuYAPAjoBul_w',
    callbackURL: "/auth/google/callback",
},
    function (accessToken, refreshToken, profile, done) {

        return done(null, profile)
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });
    }
));

passport.use(new FacebookStrategy({
    clientID: '2446551442264007',
    clientSecret: '5affcd31d38f2227c5094380fca76375',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email', 'first_name', 'last_name', 'middle_name', 'photos', 'profileUrl', 'gender']
},
    function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));