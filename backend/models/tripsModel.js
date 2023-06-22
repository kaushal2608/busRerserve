import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema({
 
 date: { type: Number, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  busOwnerID: { type: Number, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  category: { type: String, required: true },
  seatBooked: { type: Number, required: true },
  bus_no: { type: String },
  amenities_list: { type: [String], required: true },
  busFare: { type: Number, required: true },
  busName: { type: String, required: true },
  session: { type: String, required: true},
  rating: { type: Number, required: true}
});

export default mongoose.model("trips", tripsSchema);