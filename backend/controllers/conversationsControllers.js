const asyncHandler = require('express-async-handler');
const Conversation = require('../models/Conversation');

// @desc  start new conversation
// @rout  POST /api/conversations/
const newConversation = asyncHandler(async (req, res) => {
  const new_Conversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  const savedConversation = await new_Conversation.save();
  res.status(200).json(savedConversation);
});

// @desc  get conversatio of a user
// @rout  POST /api/conversations/:userId 
const getConversation = asyncHandler(async (req, res) => {
  const conversation = await Conversation.find({
    members: { $in: [req.params.userId] },
  });
  res.status(200).json(conversation);
});

module.exports = {
  newConversation,
  getConversation,
};
