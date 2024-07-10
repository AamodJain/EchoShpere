import Conversation from "../models/Conversation.model.js";
import Message from "../models/Message.model.js";
import { getRecieverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });

        if (!conversation) {
            conversation = new Conversation({
                members: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage);
        }
        await Promise.all([conversation.save(), newMessage.save()]);
        
        // socket.io to be added here
        const receiverSocketId = getRecieverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("error in sendMessage controller \n", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } }).populate("messages");

        if (!conversation) {
            return res.status(200).json({ messages: [] });
        }
        // console.log(conversation.messages);
        res.status(200).json({ messages: conversation.messages })

    } catch (error) {
        console.log("error in getMessage controller \n", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}