var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    message: String,
    adId: {type: mongoose.Schema.Types.ObjectId, ref: 'adModel'},
    from: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    to: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    username : String

}, {collection: 'message'});

module.exports = messageSchema;