import express, { Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/chat", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "chat.html"));
});

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.emit("message", "Welcome to the Chatroom!");
});

httpServer.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
