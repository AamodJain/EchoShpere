import { Server } from "socket.io";
import http from "http";
import expresss from "express";

const app = expresss();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5000"],
        methods: ["GET", "POST"],
    },
    });

io.on("connection", (socket) => {
    console.log("a user connected",socket.id);

    socket.on("disconnect", () => {
        console.log("user disconnected" , socket.id);
    });
}
);

export {io, server, app}