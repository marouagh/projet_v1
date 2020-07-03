const express = require("express");
const Annonce = require('../model/Annonce');
const User = require('../model/User');
const isAuth = require("../middlewares/passport-Setup");
const router = express.Router();
const {validateAnnonceInput, validator} = require('../middlewares/annonceValidator')

router.post("/", isAuth(), validateAnnonceInput(), validator, async (req, res) => {
   
        try {
            
          const {
            ref,name,telephone,email,description,deadline,date}=req.body
    
          const new_annonce = new Annonce({
            ref,name,telephone,email,description,deadline,date,user:req.user.id
          });
        
          const annonce= await new_annonce.save()
          res.json(annonce)
        } catch (err) {
          console.error(err.message);
        }
    })

    //get all annonces

    router.get("/all",async(req,res)=>{
        try {
          const annonces=await Annonce.find()
          annonces.length===0?res.status(400).json({msg:"annonce is Empty"}):res.json(annonces)
        } catch (err) {
          console.error(err)
        }
      
      })
       //get annonce user

       router.get('/is', isAuth(), async (req, res) => {
        try {
          const annonce = await Annonce.find({
            user: req.user.id,
          }).populate('user', [
            'name','email'
          ]);
          if (!annonce)
            return res.status(400).json({ msg: 'there in no annonce for this user' });
          res.json(annonce);
        } catch (err) {
          console.error(err.message);
          res.status(500);
        }
      });

    

      //delete annonce

      router.delete("/:id",isAuth(),async(req,res)=>{

        try {
          let id_annonce=req.params.id
          await Annonce.findOneAndDelete({ _id:id_annonce})
          res.send({success:true})
          
        } catch (err) {
          console.error(err.message)
          res.send({success:false})
          
        }
      })

//recherche selon name
router.get("/:name",async(req,res)=>{
    try {
        let name_annonce=req.params.name
      const annonce=await Annonce.find({ name:name_annonce})
      annonce.length===0?res.status(400).json({msg:"annonce not existe"}):res.json(annonce)
    } catch (err) {
      console.error(err)
    }
  
  })


  
  module.exports = router