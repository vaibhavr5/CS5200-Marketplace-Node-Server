var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function findUserByCredentials(username,password) {
  return userModel.findOne({username:username,password:password});
}

function findUserByName(username)
{
  return userModel.findOne({username:username});
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function createUser(user) {
  return userModel.create(user);
}

function findAllUsers() {
  return userModel.find();
}

function updateUser(user) {
    return userModel.updateOne({_id: user._id}, user);
}

function deleteUserById(userId)
{
    return userModel.find({_id:userId}).remove().exec();
}

var api = {
  createUser: createUser,
  findAllUsers: findAllUsers,
  findUserById: findUserById,
  findUserByCredentials: findUserByCredentials,
    updateUser: updateUser,
    deleteUserById:deleteUserById,
    findUserByName: findUserByName
};

module.exports = api;