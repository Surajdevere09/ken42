const User = require("../model/user.model");

const express = require("express");

const router = express.Router();


router.get("", async(req,res)=>{

    try {
        const user = await User.find().lean().exec()
    res.status(200).send(user)
    } catch (e) {
        console.log('e:', e.message)
        res.status(500).send(e.message)
    }
})

module.exports = router