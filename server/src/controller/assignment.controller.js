const express = require("express");
const Assignment = require("../model/assignment.model")
const router = express.Router();

router.get("", async (req, res)=>{
   try {
 const assignment= await Assignment.find().lean().exec();
 
 res.status(200).send(assignment)
    } catch (e) {
        console.log('e:', e)
        res.status(500).send(e.message)
    }
})


router.patch("/:id", async (req, res)=>{
    try {
  const assignment= await Assignment.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
}).lean().exec();
  
  res.status(200).send(assignment)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

 router.get("/:id", async (req, res)=>{
    try {
  const assignment= await Assignment.findById(req.params.id).lean().exec();
  
  res.status(200).send(assignment)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })
 router.delete("/:id", async (req, res)=>{
    try {
  const assignment= await Assignment.findByIdAndDelete(req.params.id).lean().exec();
  
  res.status(200).send(assignment)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

router.post("", async (req, res)=>{
    
    try {
        const assignment= await Assignment.create(req.body);
    
    res.status(201).send(assignment);
    } catch (e) {
        console.log('e:', e.message)
        res.status(500).send(e.message)
    }
})
module.exports = router