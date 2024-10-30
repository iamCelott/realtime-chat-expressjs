import express, { Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/chat", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "chat.html"));
});

app.post("/message", async (req: Request, res: Response) => {
  const { username, message } = req.body;

  if (!username || !message) {
    res.status(400).json({ error: "Username and message are required" });
  }

  await io.emit("message", { username, message });

  res.status(200).json({ status: "Message sent" });
});

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.emit("welcome", "Welcome Guachamole!!");

  socket.on("join", (username) => {
    socket.broadcast.emit("user_join", `${username} has joined the chat`);
  });
});

httpServer.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
