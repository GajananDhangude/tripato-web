const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.js")


async function registerUser(req , res) {
    const {firstname , lastname , email , password , phone} = req.body;

    const isUserExists = await UserModel.findOne({email});

    if(isUserExists){
        return res.status(401).json({
            message:"User Already Exists"
        })
    }

    const HashedPassword = await bcrypt.hash(password , 10);

    const newUser = await UserModel.create({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:HashedPassword,
        phone:phone
    })


    const token = jwt.sign({
        id:newUser._id,
    } , process.env.JWT_SECREAT);

    res.cookie("token" , token);

    res.status(201).json({
        message:"User Registered Successfully!",
        user:{
            id:newUser._id,
            FirstName:newUser.firstname,
            LastName:newUser.lastname,
            Email:newUser.email,
            password:HashedPassword,
            Phone:newUser.phone
        }
    })
}



async function LoginUser(req , res){
    const {email , password} = req.body;

    const user = await UserModel.findOne({email});

    if(!user){
        return res.status(401).json({
            message:"Invalid email or password"
        })
    }

    const isPasswordvalid = await bcrypt.compare(password , user.password);

    if(!isPasswordvalid){
        return res.status(401).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECREAT)

    res.cookie("token" , token)

    res.status(201).json({
        message:"User Logged in Successfull !",
        user:{
            id:user._id,
            FirstName:user.firstname,
            Lastname:user.lastname,
            Email:user.email
        }
    })
}


function LogoutUser(req , res) {
    res.clearCookie("token")
    res.status(201).json({
        message:"User logged out successfully"
    })
}



module.exports = {
    registerUser,
    LoginUser,
    LogoutUser
}