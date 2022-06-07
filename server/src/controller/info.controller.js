const Info = require("../model/info.model");

const express = require("express");

const router = express.Router();

router.post("",async(req,res)=>{

    try {
        const info =await Info.create(req.body);

        res.status(201).send(info)
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message)
    }

})

router.get("", async(req,res)=>{

    try {
        const infos = await Info.find().populate("name").lean().exec()
    res.status(200).send(infos)
    } catch (e) {
        console.log('e:', e.message)
        res.status(500).send(e.message)
    }
})

module.exports = router