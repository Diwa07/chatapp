const express = require('express')
const router = express.Router()

const Message=require('../models/message')


router.post("/message", async (req, res) => {
    try {
        await Message.create(req.body)
        console.log(req.body)
        res.json({
            msg:"mdg delivered"
        })
} catch (err){
    
    }
       
  });


  router.get("/message", async (req, res) => {
    try {
        const data = await Message.find()
        if(data){
            res.status(200).json({
                msg: data
            })
        }else{
            res.status(500).json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
    });

  module.exports = router;