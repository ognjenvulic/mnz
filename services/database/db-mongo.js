const mongoose = require('mongoose');
const keys = require('../../config/keys')
const MONGODB_URI = process.env.MONGODB_URI || keys.mongoURI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require('../../models/users');

//Data parsing
mongoose.connection.on('connected', () =>  {
  console.log('Mongoose is connected!!!');
});