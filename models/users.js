const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.model('Users', new Schema({
  googleId: String
}));

//NOTE: It's not done with export because tests can load this file
//multiple time and confuse mongoose.

// //Model
// const Users = mongoose.model('Users', UserSchema);
//
// module.exports = Users;
