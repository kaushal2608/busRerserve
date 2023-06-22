import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
 passengerName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  busName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    
  },
  totalSeats: {
    type: Number,
   
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
 
});


export default mongoose.model('bookedtickets ', ticketSchema);

