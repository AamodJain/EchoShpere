import { Server } from "socket.io";
import http from "http";
import expresss from "express";

const app = expresss();

const server = http.createServer(app);

const userSocketMap = {};

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
    },
    });

export const getRecieverSocketId = (recieverId) => {
    return userSocketMap[recieverId];
}

io.on("connection", (socket) => {
    console.log("a user connected",socket.id);
    const userId = socket.handshake.query.userId;
    if(userId != undefined){
        userSocketMap[userId] = socket.id;
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected" , socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
}
);

export {io, server, app}