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
router.get("/ongoing", async (req, res)=>{
    let z = new Date().toISOString().slice(0, 10)
    try {
  const event = await Event.find().lean().exec();
 //ongoing Event
  let ans= event.filter((e)=> {
    let x = new Date(e.startDate);
    let y = new Date(e.endDate);
    z = new Date(z);
    return +x<=+z && +z<=+y
    
  })
  res.status(200).send(ans)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })
 router.get("/upcomming", async (req, res)=>{
    let z = new Date().toISOString().slice(0, 10)
    try {
  const event = await Event.find().lean().exec();
 //upcomming Event
  let ans= event.filter((e)=> {
    let x = new Date(e.startDate);
    let y = new Date(e.endDate);
    z = new Date(z);
    return +x>+z
    
  })
  res.status(200).send(ans)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })
 router.get("/completed", async (req, res)=>{
    let z = new Date().toISOString().slice(0, 10)
    try {
  const event = await Event.find().lean().exec();
 //completed Event
  let ans= event.filter((e)=> {
    let x = new Date(e.startDate);
    let y = new Date(e.endDate);
    z = new Date(z);
    return +y<+z
    
  })
  res.status(200).send(ans)
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