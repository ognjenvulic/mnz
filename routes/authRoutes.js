const router = require('express').Router();
const passport = require('passport');

router.get( '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get( '/google/callback',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }),
  (req, res) => {
    res.redirect('localhost:3000');
    //res.redirect('/posts');//TODO SOMETHING ELSE
  }
);

router.get( '/logout', (req, res)=> {
    req.logout();
    //res.send(req.user);
    //res.redirect('/');//NOT WORKING
    res.redirect('localhost:3000');
  }
);

router.get( '/current_user', (req, res)=> {
    res.send(req.user);
  }
);

module.exports = router;
