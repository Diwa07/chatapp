const express = require('express')
const router = express.Router()
const multer =require('multer')
const Profile=require('../models/profile')

// const Profile =require('../models/profile')

const storage =multer.diskStorage({
    destination:function ( req,file,cb){
        cb(null,'../client/src/uploads/profile')
    },
    filename : function(req,file,cb){
      console.log(file)
        cb(null,file.originalname)
    }
});
const upload =multer ({ storage:storage}). single('avatar')
router.post('/profile', upload, async (req, res,) => {
  console.log(req.file)
  const profile =new Profile(
    {
      fullName:req.body.name,
      avatar: req.file.filename,
      id:req.body._id,
      file:req.file.path,
      url:req.file.destination
      

    }
   )
   const data= await profile.save()
    try {
      if (data) {
        res.json({
          msg: "your details is posted",
        });
      } else {
        res.status(500).json({
          error: "something went wrong",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
 

  router.get("/profile", async (req, res) => {
    try {
        const data = await Profile.find()
        if(data){
            res.status(200).json({
                validDetails: data
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