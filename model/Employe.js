
const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  annonce: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Annonce',
  },
 
  status: {
    type: String,
     required: true,
  },
  skills: {
    type: [String]
    // required: true,
  },
  bio: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date,
        default: Date.now
      },
     
      description: {
        type: String,
      },
    },
  ],
  postule: [
    {
      ref : {type : String},
name : {type : String},        
telephone : {
        type : Number},
email : {type : String,},
        
description :{
    type : String
},
deadline : {
    type : String,
    
},       

date : {type : Date,
default : Date.now}

    },
  ],
});



 

module.exports = Emp = mongoose.model('Emp', EmpSchema);

