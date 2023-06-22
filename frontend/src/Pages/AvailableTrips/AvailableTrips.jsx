import React, { useState } from 'react';
import moment from 'moment';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import "./AvailableTrips.css";
import { useLocation, useNavigate } from 'react-router-dom';

const AvailableTrips = (props) => {
    const { state } = useLocation();
    const filteredData = state?.data || [];
    const [selectedBus, setSelectedBus] = useState(null);
    const [seatCount, setSeatCount] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatData, setSeatData] = useState([
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false },
        { id: 6, selected: false },
        { id: 7, selected: false },
        { id: 8, selected: false },
        { id: 9, selected: false },
        { id: 10, selected: false },
        { id: 11, selected: false },
        { id: 12, selected: false },
        { id: 13, selected: false },
        { id: 14, selected: false },
        { id: 15, selected: false },
        { id: 16, selected: false },
        { id: 17, selected: false },
        { id: 18, selected: false },
        { id: 19, selected: false },
        { id: 20, selected: false },
        { id: 21, selected: false },
        { id: 22, selected: false },
        { id: 23, selected: false },
        { id: 24, selected: false },
        { id: 25, selected: false },
        { id: 26, selected: false },
        { id: 27, selected: false },
        { id: 28, selected: false },
        { id: 29, selected: false },
        { id: 30, selected: false },
        { id: 31, selected: false },
        { id: 32, selected: false },
        { id: 33, selected: false },
        { id: 34, selected: false },
        { id: 35, selected: false },
        { id: 36, selected: false },
        { id: 37, selected: false },
        { id: 38, selected: false },
        { id: 39, selected: false },
        { id: 40, selected: false }
    ]);


    function handleSeatClick(index) {
        setSeatData(prevSeatData => {
            const newSeatData = [...prevSeatData];
            newSeatData[index] = {
                ...newSeatData[index],
                selected: !newSeatData[index].selected
            };

            if (newSeatData[index].selected) {
                setSeatCount(prevCount => prevCount + 1);
                setSelectedSeats(prevSelectedSeats => [
                    ...prevSelectedSeats,
                    newSeatData[index].id
                ]);
            } else {
                setSeatCount(prevCount => prevCount - 1);
                setSelectedSeats(prevSelectedSeats =>
                    prevSelectedSeats.filter(seat => seat !== newSeatData[index].id)
                );
            }

            return newSeatData;
        });
    }




    const handleBookNowClick = (bus) => {
        console.log(bus)
        if (selectedBus != null) {
            setSelectedBus(null)
        } else {
            setSelectedBus(bus);
        }
    }



    let Navigate = useNavigate()
    const handleFinalSubmit = (event) => {
        event.preventDefault()
        console.log("Hello")
        Navigate('/detailfilling', { state: { ChoosedBus: { selectedBus }, ChoosedSeat: { selectedSeats } } })
    }





    return (
        <>
            <Navbar />
            <div className="contain">
                {/* Available Buses Space */}
                {filteredData.length > 0 ? <div className="col-md-12 bus-div">
                    <div className="card-body" style={{ marginTop: '-12px' }}>
                        {filteredData.map((bus) => (
                            <div key={bus.bus_no} className="card shadow border  m-3  d-flex justify-content-center">
                                <div className="row m-0"  >
                                    <div className="col-md-9" style={{ borderRight: "1px solid #ccc", height: "100%" }} >
                                        <div>
                                            <div className="d-flex justify-content-between pt-3 px-3">
                                                <h4>{bus.busName}</h4>

                                            </div>
                                            <p className="text-muted px-3">
                                                AC Coaches | {bus.seatBooked} Seats left
                                            </p>
                                            <h6
                                                className="d-flex justify-content-between px-3"
                                                style={{ fontSize: "15px" }}
                                            >
                                                {`${bus.startTime}, ${moment.unix(bus.date/1000).format("DD/MM/YYYY")}`}
                                                <span className="text px-3" style={{ marginLeft: "10px", color: "gray", fontSize: "13px" }}>
                                                    5h and 54 min
                                                </span>

                                                {`${bus.endTime}, ${moment.unix(bus.date/1000).format("DD/MM/YYYY")}`}
                                            </h6>
                                            <div className="d-flex justify-content-between px-3  " style={{ fontWeight: "bold" }}>
                                                <p className="font-weight-bold"> {bus.from}</p>
                                                <p style={{ fontSize: "15px", fontWeight: "lighter" }}>To</p>
                                                <p className="font-weight-bold"> {bus.to}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center">
                                        <div className="d-flex justify-content-center" style={{ alignItems: "center", flexDirection: "column" }}>
                                            <p className='' style={{ fontWeight: "bold", lineHeight: "1px", fontSize: "15px" }}>Trip Cost</p>
                                            <p className='text-muted' style={{ fontSize: "12px" }}>starting from</p>
                                            <div className="btn " style={{ fontWeight: "bold", lineHeight: "1px", fontSize: "30px", marginTop: "-10px" }}>₹ {bus.busFare}</div>
                                            <button className="btn mt-3 mb-3" style={{ color: "white", backgroundColor: "#FF5733 " }} onClick={() => handleBookNowClick(bus)}>
                                                {selectedBus && selectedBus.bus_no === bus.bus_no ? "Hide Seat" : "View Seat"}
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                {selectedBus && selectedBus.bus_no === bus.bus_no && (
                                    <div className="row m-0 justify-content-between" style={{ borderTop: "1px solid #ccc", width: "100%" }}>
                                        <div className="col-md-9 mt-3 mb-3 col-sm-12 p-3" >
                                            <p>Select Seats:</p>
                                            <div className="slot-row" id="input-group" style={{ border: "1px solid #ccc", borderRadius: "5px" }}>

                                                <div className="seat-grid p-3">
                                                    {seatData.map((seat, index) => (
                                                        <div
                                                            style={{ border: "1px solid #ccc", height: "15px", width: "45px", marginBottom: "3px", cursor: "pointer" }}
                                                            className={"seat" + (seat.selected ? " selected" : "")}
                                                            key={seat.id}
                                                            onClick={() => handleSeatClick(index, [])}
                                                        ></div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-3 mb-3 col-sm-12 d-flex justify-content-center" >
                                            <div className="d-flex justify-content-center p-3" style={{ alignItems: "center", flexDirection: "column", border: "1px solid #ccc", borderRadius: "5px", }}>
                                                <p className="mt-3" style={{ fontWeight: "bold", lineHeight: "1px", fontSize: "15px" }}>Total Cost</p>
                                                <p className="text-muted" style={{ fontSize: "12px" }}>
                                                    Seat No. {selectedSeats.join(", ")}
                                                </p>
                                                <div className="btn" style={{ fontWeight: "bold", lineHeight: "1px", fontSize: "30px", marginTop: "-5px" }}>₹ {bus.busFare * seatCount}</div>
                                                <button className={`btn mt-3 mb-3 ${seatCount ? 'btn-success' : 'btn-secondary '}`} onClick={handleFinalSubmit} disabled={!seatCount} >
                                                    Proceed To Book
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                </div> :
                    <div className='d-flex justify-content-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
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
                            Sorry, No buses available for this route and date!</p>
                    </div>

                }
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </>
    );
};

export default AvailableTrips;
