import User from "../models/user.model.js";

export const getConversations = async (req,res) => {
    try {
        const senderId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: senderId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error in getConversations controller \n",error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
