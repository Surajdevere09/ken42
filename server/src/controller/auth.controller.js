require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/user.model")


const newToken=(user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY);
};

const register =async (req, res)=>{

    try {
        let user  = await User.findOne({email:req.body.email}).lean().exec();
    
        if(user)
        return res.status(400).send({message:"please try another email"});
    
        user = await User.create(req.body);
        const token = newToken(user);

        res.send({user,token});
         
    } catch (e) {
        console.log('e:', e.message);
    }
}
const login = async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
    
         if(!user) return res.status(400).send({message:"Please try another email or password"});
    
         const match= user.checkPassword(req.body.password);

         if(!match) return res.status(400).send({message:"Please try another email or password"});

         const token  = newToken(user);

         res.send({user,token});

        } catch (e) {
        console.log('e:', e.message);
    }
}

module.exports = {register,login}