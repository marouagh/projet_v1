const express = require('express');
const {registerRules, validator} = require('../middlewares/validators')
const userController = require('../controllers/user.Controller')
const router = express.Router();
const User = require('../model/User')
const isAuth = require('../middlewares/passport-setup')
router.post('/register', registerRules(), validator, userController.register)
router.post('/login', userController.login)
router.get('/alls',async(req,res)=>{
    try {
      const users=await User.find()
      User.length===0?res.status(400).json({msg:"Empty"}):res.json(users)
    } catch (err) {
      console.error(err)
    }
  
  })
  router.delete("/deleteUser/:id",async(req,res)=>{

    try {
      let id_user=req.params.id
      await User.findOneAndDelete({ _id:id_user})
      res.send({success:true})
      
    } catch (err) {
      console.error(err.message)
      res.send({success:false})
      
    }
  })



router.get('/current', isAuth(), (req, res) =>res.json(req.user))
router.put("/:id", isAuth(), userController.editUserById);
module.exports = router
