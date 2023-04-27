const messageHistory = async (req, res) => {
    const { session, db: { Message } } = req;
    if (!session.userId) return res.sendStatus(401);
    
    // socket.io logic here
    const messages = await Message.getMessages();
    io.emit('chat message', messages);
    
    res.send('Chat message sent successfully');
  };

  module.exports = messageHistory