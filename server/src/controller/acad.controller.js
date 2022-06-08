const express = require("express");
const Acad = require("../model/academics.model")
const router = express.Router();

router.get("", async (req, res)=>{
   try {
 const acad= await Acad.find().lean().exec();
 
 res.status(200).send(acad)
    } catch (e) {
        console.log('e:', e)
        res.status(500).send(e.message)
    }
})


router.patch("/:id", async (req, res)=>{
    try {
  const acad= await Acad.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
}).lean().exec();
  
  res.status(200).send(acad)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

 router.get("/:id", async (req, res)=>{
    try {
  const acad= await Acad.findById(req.params.id).lean().exec();
  
  res.status(200).send(acad)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })
 router.delete("/:id", async (req, res)=>{
    try {
  const acad= await Acad.findByIdAndDelete(req.params.id).lean().exec();
  
  res.status(200).send(acad)
     } catch (e) {
         console.log('e:', e)
         res.status(500).send(e.message)
     }
 })

router.post("", async (req, res)=>{
    
    try {
        const acad= await Acad.create(req.body);
    
    res.status(201).send(acad);
    } catch (e) {
        console.log('e:', e.message)
        res.status(500).send(e.message)
    }
})
module.exports = router