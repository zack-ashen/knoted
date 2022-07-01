import mongoose from 'mongoose';


const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    hashKey: true
  },
  gpa: {
    type: Number,
    required: false
  },
  



})