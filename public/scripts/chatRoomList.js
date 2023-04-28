const chatRoomslist = document.getElementById('chatRooms');

const main = async() => {
const user = await window.fetchLoggedInUser()
console.log(user)
fetch('/api/listRoom')
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(elem => {
        const listElement = document.createElement('li')
        listElement.textContent = elem.name


        const button = document.createElement('button')
        button.addEventListener('click', () => {
            fetch('/api/joinRoom', {
                method: "POST",
                body: JSON.stringify({
                    "roomId":elem.id,
                    "userId":user.user.id
                }),
                headers: {
                    "Content-Type": "application/json"
                  }
            })
            window.location.href = `/chatroom.html?room_id=${elem.id}`
        })
        listElement.append(button)

        chatRoomslist.append(listElement)
    })
})
}
main()