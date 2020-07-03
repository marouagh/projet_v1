
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const secretOrKey = config.get('secretOrKey')
const User = require('../model/User')
const userController = {
    register:async (req, res) =>{
        const {email, name, password} = req.body;
        try {
            const searchRes = await User.findOne({email})
            if(searchRes) return res.status(400).json({errors: 'user already exists'})
            const newUser = new User({name, email, password})
            bcrypt.genSalt(10, (err, salt) =>{
                if(err) throw err
                bcrypt.hash(password, salt, async(err, hash) =>{
                    if(err) throw err
                    newUser.password = hash
                    try {
                        const addRes = await newUser.save()
                        res.status(201).json(addRes)
                    } catch (error) {
                        res.status(500).json({errors: errors})
                    }
                })
            })
        } catch (error) {
            res.status(500).json({errors: error})
        }
    },
    login: async (req,res) =>{
        const {email, password} = req.body
        try {
            const searchRes = await User.findOne({email})
            if(!searchRes) return res.status(400).json({errors: 'bad credentials!'})
            const isMatch = await bcrypt.compare(password, searchRes.password)
            if(!isMatch) 
                return res.status(400).json({errors: 'bad credentials'})
            const payload = {
                id : searchRes._id,
                email : searchRes.email,
                name : searchRes.name
            }
            jwt.sign(payload, secretOrKey, (err, token) =>{
                if(err) throw err
                res.json({token: `Bearer ${token}`})
            })
        } catch (error) {
            res.status(500).json({errors: error})

        }

    },
 editUserById: async (req, res) => {
        const id = req.params.id;
        const update = { ...req.body };
     
        try {
          const user = await User.findOneAndUpdate(
            {  _id : id },
            { $set: update },
            { new: true }
          );
           if(!user){
             return res.status(400).send({msg :"User dont exist"})
           } 
    
          res.send(user);
        } catch (error) {
          console.log(error);
          res.status(500).send({ errors: "Server Error" });
        }
      }
      
}


module.exports = userController