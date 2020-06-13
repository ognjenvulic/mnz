const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../../config/keys');

//NOTE: Done this way on purpose because tests can confuse mongoose by multiple loading model file.
const mongoose = require('mongoose');
const User = mongoose.model('Users');

passport.serializeUser((user, done)=> {
  done(null, user.id);//NOTE this is DB id extracted here... passport is doing the wiring
});

passport.deserializeUser((id, done)=>{
  User.findById(id)
    .then( user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}).then( existingUser =>{
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id})
          .save()
          .then( savedUser => {
            done(null, savedUser);
          });
      }
    });
  })
);