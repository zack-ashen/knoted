import mongoose from 'mongoose';


export type Availability = {
  startTime: string;
  endTime: string;
}


export type Course = {
  id: string;
  public: boolean;



}


export type User = {
  id: string;
  gpa: number;
  courses: Course[];
}


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
  courses: {
    type: Array,
    required: false,
    schema: [String],
    default: []
  }
})

export const User = mongoose.model('Users', schema);