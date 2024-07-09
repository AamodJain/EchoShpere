import jwt from 'jsonwebtoken';

const generateTokenSetCookie = (userId,res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: '15d' });
    res.cookie('token', token, { 
        httpOnly: true, 
        expires: new Date(Date.now() + 3600000),
        sameSite : 'strict', // csrf protection 
        secure : process.env.NODE_ENV !== 'development' // cookie only works in https
    });
}

export default generateTokenSetCookie;