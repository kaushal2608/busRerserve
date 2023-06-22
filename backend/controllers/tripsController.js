import tripsModel from "../models/tripsModel.js";
export const posttripsController = async (req, res) => {
     const {date, from, to, busOwnerID, startTime, endTime, category, seatBooked, bus_no, amenities_list, busFare, busName, session, rating } = req.body; 

  //  here we are creating a new instance of the booking schema with the help of  data
  const myData = new tripsModel({ date, from, to, busOwnerID, startTime, endTime, category, seatBooked, bus_no, amenities_list, busFare, busName, session, rating  });

  // now we saving the new booking data to database
  const saved = await myData.save();

  if (saved) {
    // when the booking is successull the success message with the data is send
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {
    // when booking is not successful  error messege is send in  response with a null data
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
}


//get  all trips controller 
export const gettripsController = async (req, res) => {
    const myData = await tripsModel.find(); // finding the most recent booking from database
  if (myData.length === 0) {
    // if no booking data is found send a response with a null data and a message
    res.status(200).json({ data: null, message: "No trips are found" });
  } else {
    // if booking data is found send a success response with the booking data
    res.status(200).json({ data: myData});
  }

}

//get  trips by date controller


export const dateTripsController = async (req, res) => {
    try {
    const { date } = req.query;
    // Query the database to find all trips matching the given date
    const trips = await tripsModel.find({ date: date });
    if(trips.length === 0){
       res.status(200).json({ data: null, message: "No trips are found" });
    }
    res.status(200).json({data: trips, message: "trips found successfully" });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!. Please try again.",
      error,
    });
  }

}


//get  trips by query controller
 export const queryTripsController = async (req, res) => {
    try {
    const { from, to, date, startTime, endTime, busName, session, rating } = req.query;

    // Build the filter object based on the provided parameters
    const filter = {};

    if (from) {
      filter.from = from;
    }

    if (to) {
      filter.to = to;
    }

    if (date) {
      filter.date = date;
    }

    if (endTime) {
      filter.endTime = endTime;
    }

    if (startTime) {
      filter.startTime = startTime;
    }

    if (busName) {
      filter.busName = busName;
    }
    if (session) {
      filter.session = session;
    }
    if (rating) {
      filter.rating = rating;
    }

    // Query the database using the constructed filter object
    const trips = await tripsModel.find(filter);

    
     if(trips.length === 0){
       return res.status(200).json({ data: null, message: "No trips are found" });
    }

    res.status(200).json({
      success: true,
      message: 'Trip details fetched successfully',
      data: trips
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!. Please try again.",
      error,
    });
  }

} 