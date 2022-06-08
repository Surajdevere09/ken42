const mongoose = require('mongoose');

const acadSchema = new mongoose.Schema({

    title:{type:String, required:true},
    fees:{type:String, required:true},
    info:{type:String, required:true},
    image:{type:String, required:true},


},{
    timestamps:true,
    versionKey: false
})

const Acad = mongoose.model('academics',acadSchema);

module.exports = Acad 