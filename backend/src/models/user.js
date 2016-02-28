import mongoose from 'mongoose';
import mongooseUtilities from 'mongoose-utilities';
import BPromise from 'bluebird';


var UserSchema = new mongoose.Schema({
  firstName:  {type: String},
  lastName:   {type: String}
}, {
  versionKey : false
});


UserSchema.plugin(mongooseUtilities.timestamp, {useVirtual: false, createdPath: 'createdAt', modifiedPath: 'modifiedAt'});


var User = mongoose.model('User', UserSchema);
BPromise.promisifyAll(User);
module.exports = User;
