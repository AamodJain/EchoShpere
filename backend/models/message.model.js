import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId : {
        type : String,
        required : true,
    },
    receiverId : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    },
},{timestamps : true});

const Message = mongoose.model("Message",messageSchema);

export default Message;