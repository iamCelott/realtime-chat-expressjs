import express, { Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome!");

  socket.on("join", (username) => {
    socket.broadcast.emit("user_join", `${username} has joined the chat`);
  });

  socket.on("chat message", (msg) => {
    console.log("Received chat message: ", msg);
    socket.emit("chat message", msg);
  });
});

httpServer.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
