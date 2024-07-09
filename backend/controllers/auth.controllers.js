import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

import getFirstAndLastName from "../utils/getFirstAndLastName.utils.js";
import generateTokenSetCookie from "../utils/generateToken.utils.js";

export const signup = async(req, res) => {  
    try {
        const { fullname, username, password, confirmPassword } = req.body;  
        const { firstName, lastName } = getFirstAndLastName(fullname);

        if(password !== confirmPassword) {
            return res.status(400).json({ error: "Password does not match." });
        }

        const user = await User.findOne({ username });

        if(user) {
            return res.status(400).json({ error: "User already exists." });
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        // default profile picture
        const profilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

        // create user
        const newUser = new User({
            fullname,
            username,
            password : hashedPassword,
            profilePic
        });

        if(newUser) {
            generateTokenSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id : newUser._id,
                fullname : newUser.fullname,
                username : newUser.username,
                profilePic : newUser.profilePic
            });
        }
        else{
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("error in signup controller \n",error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}   

export const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const oldUser = await User.findOne({ username });
        if(!oldUser) {
            return res.status(404).json({ error: "User does not exist." });
        }
        const isCorrectPassword = await bcryptjs.compare(password, oldUser.password);
        if(!isCorrectPassword) {
            return res.status(400).json({ error: "Invalid Password" });
        }
        generateTokenSetCookie(oldUser._id,res);
        res.status(200).json({
            _id : oldUser._id,
            fullname : oldUser.fullname,
            username : oldUser.username,
            profilePic : oldUser.profilePic
        });
    } catch (error) {
        console.log("error in login controller \n",error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("error in logout controller \n",error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}   