import React, { useState } from 'react';
import moment from 'moment';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import "./UserDetails.css"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
    const { state } = useLocation();
    const Navigate = useNavigate()
    let bus = state.ChoosedBus.selectedBus;
    let SelectedSeats = state.ChoosedSeat.selectedSeats;
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        let form = JSON.stringify(formData)
        const busD = JSON.stringify(bus)
        localStorage.setItem("BUS", busD)
        localStorage.setItem("FORM", form)
         const ticketData = {
           passengerName: formData.name,
           age: formData.age,
           sex: formData.gender,
           mobileNumber: formData.phone,
           email: formData.email,
           busName: bus.busName,
           from: bus.from,
           to: bus.to,
           date: bus.date,
           startTime: bus.startTime,
           endTime: bus.endTime
  };

  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/bookingticket`, ticketData);
    console.log('Ticket created successfully:', response.data);
  } catch (error) {
    console.error('Error creating ticket:', error);
  }
        Navigate('/ticketbooked', { state: { formData, bus } })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='main'>
            <Navbar />

            <div className='container'>
                <div className='row'>

                    {/* Bus Details Tab */}
                    <div className="col-md-8 mt-5 shadow p-3 mb-5 bg-light p-4 rounded">
                        <div className="d-flex justify-content-between pt-3 px-3">
                            <h3>{bus.busName}</h3>
                        </div>
                        <p className="text-muted px-3">
                            AC Coaches | {bus.seatBooked} Seats left
                        </p>
                        <h6
                            className="d-flex justify-content-between px-3"
                            style={{ fontSize: "18px" }}
                        >
                            {`${bus.startTime}, ${moment.unix(bus.date/1000).format("DD/MM/YYYY")}`}
                            <span className="text px-3" style={{ marginLeft: "10px", color: "gray", fontSize: "15px" }}>
                                5h and 54 min
                            </span>
                            {`${bus.endTime}, ${moment.unix(bus.date/1000).format("DD/MM/YYYY")}`}
                        </h6>
                        <div className="d-flex justify-content-between px-3" style={{ fontWeight: "bold", fontSize: "18px" }}>
                            <p className="font-weight-bold"> {bus.from}</p>
                            <p style={{ fontSize: "15px", fontWeight: "lighter" }}>To</p>
                            <p className="font-weight-bold"> {bus.to}</p>
                        </div>
                    </div>

                    {/* One Div For Column Space */}
                    <div className="col-md-1"></div>

                    {/* Final Ticket Display */}
                    <div className="col-md-3 mt-5 shadow bg-light p-4 rounded">
                        <div className="fare-details">
                            <h5 style={{ borderBottom: "1px solid black", width: "110px" }}>Fare Details</h5>
                            <p>Base Fare <p className='text-right'>₹{SelectedSeats.length * bus.busFare}</p></p>
                            <p className="text">Tax <p className='text-right'>₹150</p></p>
                            <p className="text">Offer applied <p className='text-right'>₹50</p></p>
                            <hr />
                            <p style={{ fontWeight: 'bold' }}>Total Price <p className='text-right'>₹{SelectedSeats.length * bus.busFare + 150 - 50}</p></p>

                        </div>
                    </div>

                    {/* Details Filling Form */}
                    <div className='col-md-8 shadow p-3 mb-5 bg-light p-4 rounded mt-3'>
                        <form className="row p-5" onSubmit={handleSubmit}>
                            <div className="form-group col-md-4">
                                <label htmlFor="name" style={{ color: 'black' }}>Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="age" style={{ color: 'black' }}>Age</label>
                                <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="gender" style={{ color: 'black' }}>Gender</label>
                                <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="email" style={{ color: 'black' }}>Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="phone" style={{ color: 'black' }}>Phone Number</label>
                                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" className={` btn btn-lg mt-3 `} style={{ color: "white", backgroundColor: "#FF5733" }} >
                                    Proceed To Payment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserDetails
