import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "../Styles/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="py-4" style={{ backgroundColor: "#D3D3D3" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 style={{ color: "#FF5733 ", fontWeight: "bolder" }} >RESERVE</h2>
                        <p className="text-start ">When you have a choice. Choose Reserve.
                            <br />
                            Reserve offers bus tickets booking through
                            its website, IOS and Android mobile apps for all major cities.
                            <br />
                            reserve.bus@reserve.com
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none">About Us</a></li>
                            <li><Link to="/contact" className="text-decoration-none">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none">Career</a></li>
                            <li><a href="/" className="text-decoration-none">FAQ</a></li>
                            <li><a href="/" className="text-decoration-none">T&C</a></li>
                            <li><a href="/" className="text-decoration-none">Privacy Policy</a></li>
                            <li><a href="/" className="text-decoration-none">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Follow Us</h5>
                        <ul className="">
                            <li><a href="/" className="text-decoration-none ps-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                            <li><a href="/" className="text-decoration-none ps-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                            <li><a href="/" className="text-decoration-none ps-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <div className="container text-center border-top">
                    <p className="text-light">&copy; 2023 Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>






    )
}

export default Footer
