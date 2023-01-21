const Message = require("../models/messages");
require("dotenv").config();

exports.sendMessage = (req, res, next) => {
  const newMessage = new Message({
    content: req.body.content,
    sender: req.body.sender,
  });
  newMessage
    .save()
    .then(() => {
      console.log("Added a new message");
      res.send("message sent successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllMessages = (req, res) => {
  Message.find()
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllMessagesPaginated = (req, res) => {
  var perPage = process.env.PAGE_SIZE;
  var page = Math.max(0, req.query.page);
  Message.find()
    .limit(perPage)
    .sort("-createdOn")
    .skip(perPage * page)
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      console.log(err);
    });
};
