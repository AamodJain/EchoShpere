import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import { app, server } from './socket/socket.js';

import connectDB from './db/connectDB.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use(express.json()); 
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/user",userRoutes);
 
server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});