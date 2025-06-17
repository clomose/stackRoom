import { User } from "../model/user.model.js";
import { generateToken } from "../utils/generateToken.js";

const signup = async(req,res) => {
    const {name,email,password} = req.body

    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({
            msg : "User Already Exist",
            error : true
        })
    }

    user = await User.create({
        name,
        email,
        password
    })

    if(!user) return res.status(400).json({
        msg: "Error while creating user",
        error : true
    })

    const token = generateToken(user._id);

    res.cookie('token',token,{
        httpOnly : true,
        secure : true
    })

    res.status(201).json({
        msg : "User created Successfully",
        error : false,
        data : user
    })
}

const login = async(req,res) => {
    const {email,password} = req.body;

    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            msg : "Wrong email",
            error : true
        })
    }

    const checkPassword = await user.matchPassword(password);
    if(!checkPassword) return res.status(400).json({
        msg : "Invalid Password",
        error : true
    })

    const token = generateToken(user._id);
    res.cookie('token',token,{httpOnly : true,secure : true});
    res.status(200).json({
        msg : "User Logged In",
        error : false,
        data : user
    })
}

const logout = (req,res) => {
    res.clearCookie('token');;
    res.status(200).json({
        msg : "Logged Out",
        error : false
    })
}

const google = (req,res) => {  //test purpose
    const user = req.user
    const token = generateToken(user._id);

    res.cookie('token',token,{httpOnly: true,secure:true});
    res.redirect('http://localhost:5000/api/auth');
}

export { signup , login , logout , google}