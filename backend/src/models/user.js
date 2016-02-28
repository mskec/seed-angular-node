import mongoose from 'mongoose';
import BPromise from 'bluebird';


var UserSchema = new mongoose.Schema({
  firstName:  {type: String},
  lastName:   {type: String}
}, {
  versionKey: false,
  timestamps: true
});


var User = mongoose.model('User', UserSchema);
BPromise.promisifyAll(User);
module.exports = User;
