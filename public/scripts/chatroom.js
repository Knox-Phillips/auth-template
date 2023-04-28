const messageUL = document.getElementById('messages');
const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

// make a GET request for message history
const roomId = new URLSearchParams(window.location.search).get('room_id');

console.log(roomId)
fetch(`/api/message-history?room_id=${roomId}`)
  .then(response => response.json())
  .then(messages => {
    console.log(messages)
    messages.response.forEach((message) => {
      const li = document.createElement('li');
      li.textContent = message.messages;
      messageUL.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// send message to server when form is submitted
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value, roomId);
    input.value = '';
  }
});

// display new messages from server
socket.on('chat message', (msg) => {
  console.log('msg sent')
  const item = document.createElement('li');
  console.log(msg)
  item.textContent = msg;
  messageUL.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});