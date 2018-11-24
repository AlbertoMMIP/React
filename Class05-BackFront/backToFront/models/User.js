const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  }
},{
  timestamps:{
    createdAt: "create_at",
    updatedAt: "update_at"
  }
});


module.exports = mongoose.model('User', userSchema);