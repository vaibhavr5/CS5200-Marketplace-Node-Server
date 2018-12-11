
module.exports = function (app) {
    app.post('/api/message', postMessage);
    app.get('/api/msg', findMessagesForUser);
    app.delete('/api/delmsg/:messageId', deleteMessageById);

    var messageModel = require('../models/message/message.model.server');


    function postMessage(req, res) {
        console.log("In server post message");
        var message = req.body;
        var currentUser = req.session.currentUser;
        var username = currentUser.username;
        message["username"] = username;
        messageModel.createMessage(message)
            .then(function (message) {
                res.send(message);
            })
    }

    function findMessagesForUser(req,res)
    {

        var currentUser = req.session.currentUser;
        var userId = currentUser._id;
        //console.log("In user ad server"+userId);
        messageModel
            .findMessagesForUser(userId)
            .then(function (messages) {
                console.log(messages);


                res.json(messages);
            });

    }

    function deleteMessageById(req,res)
    {

        var id = req.params['messageId'];
        //console.log("In server del ad"+id);
        messageModel.deleteMessageById(id)
            .then(function(messages)
            {
                res.json(messages);
            })
    }


};