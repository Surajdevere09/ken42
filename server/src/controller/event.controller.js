const express = require("express");
const Event = require("../model/event.model")
const router = express.Router();

router.get("", async (req, res)=>{
   try {
 const event = await Event.find().lean().exec();
 
 res.status(200).send(event)
    } catch (e) {
        console.log('e:', e)
        res.status(500).send(e.message)
    }
})
router.patch("/:id", async (req, res)=>{
    try {
  const event = await Event.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
}).lean().exec();
  
  res.status(200).send(event)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

 router.get("/:id", async (req, res)=>{
    try {
  const event = await Event.findById(req.params.id).lean().exec();
  
  res.status(200).send(event)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })
 router.delete("/:id", async (req, res)=>{
    try {
  const event = await Event.findByIdAndDelete(req.params.id).lean().exec();
  
  res.status(200).send(event)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

router.post("", async (req, res)=>{
    
    try {
        const event = await Event.create(req.body);
    
    res.status(201).send(event);
    } catch (e) {
        console.log('e:', e.message)
        res.status(500).send(e.message)
    }
})
module.exports = router