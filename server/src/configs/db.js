const mongoose = require("mongoose");

module.exports =()=>{

   return mongoose.connect("mongodb+srv://suraj:suraj123@cluster0.iioyn.mongodb.net/ken42?retryWrites=true&w=majority")
}