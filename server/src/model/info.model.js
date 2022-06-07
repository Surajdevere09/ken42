const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({

    name:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    rollNumber:{type:String,required:true},
    term:{type:String,required:true},
    currentYear:{type:String,required:true},
    contactNumber:{type:String,required:true}
})

const Info = mongoose.model("info",infoSchema);

module.exports = Info;