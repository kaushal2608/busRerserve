import ticketModel from "../models/ticketModel.js";




export const bookingTicketsController = async (req, res) => {
try {
     const {passengerName, age, sex, mobileNumber, email, busName, rating, totalSeats, from, to, date, startTime, endTime} = req.body; 

  //  here we are creating a new instance of the booking schema with the help of  data
  const myData = new ticketModel({passengerName, age, sex, mobileNumber, email, busName, rating, totalSeats, from, to, date, startTime, endTime});

  // now we saving the new booking data to database
  const saved = await myData.save();

 
    // when the booking is successull the success message with the data is send
    res.status(200).json({ data: myData, message: "Booking successful!" });

    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!. Please try again.",
      error,
    });
  }


    
}


//get tickets by query

export const queryTicketsController = async (req, res) => {
    try {
    const { passengerName, age, sex, mobileNumber, email, busName, from, to, date, startTime, endTime } = req.query;

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
    if (passengerName) {
      filter.passengerName = passengerName;
    }
    if (age) {
      filter.age = age;
    }
    if (sex) {
      filter.sex = sex;
    }
    if (mobileNumber) {
      filter.age = mobileNumber;
    }
    if (email) {
      filter.email = email;
    }

    // Query the database using the constructed filter object
    const trips = await ticketModel.find(filter);

    
     if(trips.length === 0){
       return res.status(200).json({ data: null, message: "No tickets are found" });
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
