const form = document.getElementById('form')
const roomName = document.getElementById('RoomName');
const desc = document.getElementById('Description');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const requestBody = {
        roomName: roomName.value,
        description: desc.value
      };
      console.log('Before stringifying:', requestBody);
    if (roomName.value && desc.value) {
      fetch('/api/create-room', {
        method: "POST",
        body:  JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
          }
      }).then(response => response.json()).then(data => {
        window.location.href =`/chatroom.html?room_id=${data.id}`
      })
    }
});