const sendMessage = async (req, res) => {
    const { session, db: { Message } } = req;
    if (!session.userId) return res.sendStatus(401);
  
    const user = await Message.insertMessage(meesage,session.userId);
    io.emit('chat message', {
      message: message,
      created_at: new Date(),
    });
    res.send(user);
  };
  
  module.exports = sendMessage;