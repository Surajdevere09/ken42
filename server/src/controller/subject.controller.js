const express = require("express");
const Subject = require("../model/subject.model")
const router = express.Router();

router.get("", async (req, res)=>{
   try {
 const subject= await Subject.find().lean().exec();
 
 res.status(200).send(subject)
    } catch (e) {
        console.log('e:', e)
        res.status(500).send(e.message)
    }
})


router.patch("/:id", async (req, res)=>{
    try {
  const subject= await Subject.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
}).lean().exec();
  
  res.status(200).send(subject)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

 router.get("/:id", async (req, res)=>{
    try {
  const subject= await Subject.findById(req.params.id).lean().exec();
  
  res.status(200).send(subject)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })
 router.delete("/:id", async (req, res)=>{
    try {
  const subject= await Subject.findByIdAndDelete(req.params.id).lean().exec();
  
  res.status(200).send(subject)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

router.post("", async (req, res)=>{
    
    try {
        const subject= await Subject.create(req.body);
    
    res.status(201).send(subject);
    } catch (e) {
        console.log('e:', e.message)
        res.status(500).send(e.message)
    }
})
module.exports = router