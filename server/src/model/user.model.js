const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
firstName:{type:String, required:true},
lastName:{type:String, required:true},
role: [{type: String},],
    email:{type:String, required:true},
    password:{type:String, required:true},
    profile_pic:{type:String, required:true,default:"https://as1.ftcdn.net/v2/jpg/02/32/71/62/1000_F_232716200_xTsnomMS5djsC6m9cDNQmEKtPgt11Xjo.jpg"},


},{
    timestamps:true,
    versionKey:false
})

userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next();

    var hash= bcrypt.hashSync(this.password,8);
    this.password = hash.toString();
    return next();
});

userSchema.methods.checkPassword =function (password){
    return bcrypt.compareSync(password,this.password)
}

const User = mongoose.model("user",userSchema);

module.exports = User;