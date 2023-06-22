import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  let Fdata = localStorage.getItem("FORM");
  let Bdata = localStorage.getItem("BUS");
  Bdata = JSON.parse(Bdata);
  Fdata = JSON.parse(Fdata);

  const bookings = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/gettickets`, {
        params: {
          passengerName: Fdata.name,
          age: Fdata.age,
          sex: Fdata.gender,
          mobileNumber: Fdata.mobileNumber,
          email: Fdata.email,
          busName: Bdata.busName,
          from: Bdata.from,
          to: Bdata.to,
          date: Bdata.date,
          startTime: Bdata.startTime,
          endTime: Bdata.endTime
        }
      });

      const data = response.data.data;
      setTickets(data);
      console.log(tickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookings();
    //eslint-disable-next-line
  }, []);

    return (
        <div >
            <Navbar />
            {tickets != null? <div className='d-flex justify-content-center '>
                <div className='mt-5 shadow  mb-5 bg-light rounded justify-content-center px-5 pb-5'>
                    <span className='d-flex justify-content-center' style={{ fontSize: '40px', }}>&#9989;</span>
                    <h3 className=' d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Booking has been confirmed</h3>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Ticket ID : <strong> 56UHRFT</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Payment ID : <strong> 2545-326E3-7HHH</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Passanger Details : <strong> {tickets[0]?.passengerName}, {tickets[0]?.sex}, {tickets[0]?.age}yrs</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Contact Details : <strong> {tickets[0]?.mobileNumber}</strong></p>


                    <div className="col-md-12 mt-3 shadow p-3  bg-light p-4 rounded">
                        <div className="d-flex justify-content-between pt-3 px-3">
                            <h3>{tickets[0]?.busName}</h3>
                        </div>
                        <p className="text-muted px-3">
                            AC Coaches | {Bdata.seatBooked} Seats left
                        </p>
                        <h6
                            className="d-flex justify-content-between px-3"
                            style={{ fontSize: "18px" }}
                        >
                            {`${tickets[0]?.startTime}, ${moment.unix(tickets[0]?.date/1000).format("DD/MM/YYYY")}`}
                            <span className="text px-3" style={{ marginLeft: "10px", color: "gray", fontSize: "15px" }}>
                                5h and 54 min
                            </span>
                            {`${tickets[0]?.endTime}, ${moment.unix(tickets[0]?.date/1000).format("DD/MM/YYYY")}`}
                        </h6>
                        <div className="d-flex justify-content-between px-3" style={{ fontWeight: "bold", fontSize: "18px" }}>
                            <p className="font-weight-bold"> {tickets[0]?.from}</p>
                            <p style={{ fontSize: "15px", fontWeight: "lighter" }}>To</p>
                            <p className="font-weight-bold"> {tickets[0]?.to}</p>
                        </div>
                    </div>

                </div>
            </div> : <div className='d-flex justify-content-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                <img src="https://thumbs.dreamstime.com/b/sitting-child-sad-icon-element-mobile-concept-web-apps-glyph-can-be-used-white-background-130425111.jpg" alt="NoBus" style={{ height: '300px', width: '300px', marginTop: '-50px' }} />
                <p className='' style={{
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textAlign: "center",
                    textShadow: "2px 2px #ccc",

                    alignItems: 'center'
                }}>
                    Sorry, No Bookings Available</p>
            </div>}
            <Footer />
        </div>
    )
}

export default MyTickets
