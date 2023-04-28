const message = require("../../db/models/message")
//socket.io controller
const sendMessage = async (msg, userId) => {
  if (!userId) return res.sendStatus(401);
  const user = await message.insertMessage(msg, userId);
  return user
};

module.exports = sendMessage;