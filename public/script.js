import { io } from "https://cdn.socket.io/4.8.0/socket.io.min.js";
const socket = io();
console.log(socket);
// console.log("Hellow");



// const form = document.getElementById("sendMessageForm");
// const input = document.getElementById("messageInput");
// const messages = document.getElementById("messages");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value) {
//     socket.emit("chat message", input.value);
//     input.value = ""; // Clear the input field after sending
//   }
// });

// socket.on("chat message", (msg) => {
//   const item = document.createElement("li");
//   item.textContent = msg;
//   messages.appendChild(item);
//   messages.scrollTop = messages.scrollHeight; // Scroll to the bottom of the messages
// });

// if (username && message) {
//   socket.emit("sendMessage", { username, message });
//   document.getElementById("messageInput").value = ""; // Kosongkan kolom setelah kirim
// } else {
//   alert("Both username and message are required");
// }

// function renderMessage(message) {
//   const chatContent = document.getElementById("chatContent");
//   let el = document.createElement("div");
//   el.innerHTML = `
//   <div>
//   <div class="">${message.username}</div>
// </div>
//     `;
//   chatContent.appendChild(el);
// }
