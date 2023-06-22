import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
 
 state: {
    type: String
    
  },
  districts: {
    type: [String]
    
  }

});

export default mongoose.model('state_districts', stateSchema);
