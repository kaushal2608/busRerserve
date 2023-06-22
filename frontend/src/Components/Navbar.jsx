import React from 'react';
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" style={{ color: "#FF5733", fontWeight: "bold" }}>RESERVE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/mytickets' className="nav-link active" aria-current="page" >Ticket</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link" >Contact Us</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <button className='btn  mx-2' style={{ color: "white", backgroundColor: "#FF5733" }}>Login</button>
                        <button className='btn ' style={{ color: "white", backgroundColor: "#FF5733" }}>Signup</button>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
