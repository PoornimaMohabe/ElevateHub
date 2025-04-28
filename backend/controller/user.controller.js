const { UserModel } = require("../model/user.model")
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config()


const register = async (req, res) => {
    const {name , email , password , mobileNumber , role} = req.body

    try {
        const user = await UserModel.findOne({ email })
        const mobile = await UserModel.findOne({ mobileNumber })

        if (user) {
            res.status(200).json({ msg: `user already register with email ${email}` })
        }
        else if(mobile){
            res.status(200).json({ msg: `user already register with mobile number ${mobileNumber}` })
        }
        else {
            bcrypt.hash(password, 5, async function (err, hash) {
                if (err) {
                    res.status(400).json({ msg: "Error while hashing password" })
                }
                else{
                    const newUser = new UserModel({
                        name,
                        email,
                        password : hash,
                        mobileNumber , 
                        role
                    })
                    await newUser.save();
                    res.status(200).json({ msg: `user register successfully` })
                }
            });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}



const login = async (req, res) => {
    const { email , password } = req.body;
    
    try {
        const user = await UserModel.findOne({ email })

        if (!user) {
            res.status(200).json({ msg: `please register first or please check email` })
        }
        else {
            bcrypt.compare(password, user.password, function(err, result) {
                if (err) {
                    res.status(400).json({ msg: err })
                }
                else if(result){
                    var token = jwt.sign({ tokenUser : user }, process.env.secret_key);
                    res.status(200).json({ msg:"user login successfully" ,user ,  token })
                }
                else{
                    res.status(200).json({ msg:"please check password"  })
                }
            });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


module.exports = {
    register, 
    login
}
























