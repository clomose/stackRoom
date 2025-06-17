import jwt from "jsonwebtoken"
import { User } from "../model/user.model.js"

export const authCheck = async(req,res,next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({
        msg : "Not authorized",
        errot : true
    })

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select("-password");
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token invalid',error : true})
    }
}