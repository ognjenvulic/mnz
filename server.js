const express = require('express');
const morgan = require('morgan');
const keys = require('./config/keys');
require('./services/database/db-mongo');//Set db
require('./services/authentication/passport');//Set auth

const coockieSession= require('cookie-session');
const passport = require('passport');

const app = express();

app.use(
  coockieSession({
    maxAge: 30 * 24 * 60 * 60 * 100, //30days in miliseconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan('tiny'));//morgan is to write to console.

//ROUTING
app.use('/api', require('./routes/api'));
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is starting at ${PORT}`))

