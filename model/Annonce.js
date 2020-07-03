const mongoose = require('mongoose');

const annonceShcema=mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employe',
      },
ref : {type : String,
        required : true},
name : {type : String,
            required : true},        
telephone : {
        type : Number},
email : {type : String,
required:true},
        
description :{
    type : String,
    required : true,
},
deadline : {
    type : String,
    required : true,
},       

date : {type : Date,
default : Date.now}
});


module.exports = mongoose.model('annonce',annonceShcema)