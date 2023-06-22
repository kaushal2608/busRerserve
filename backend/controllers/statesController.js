import statesModel from "../models/statesModel.js";





export const getstateController = async (req, res) => {
    try {
   const myData = await statesModel.find();
   // finding the most recent booking from database
  if (myData.length === 0) {
    // if no sates data is found send a response with a null data and a message
    res.status(200).json({ data: null, message: "No districts are  found" });
  } else {
    // if booking data is found send a success response with the booking data
    res.status(200).json({ data: myData});
  }

    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!. Please try again.",
      error,
    });
  }

}
