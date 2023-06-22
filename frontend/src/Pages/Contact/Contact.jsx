import React from 'react'
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

function Contact() {
    return (
        <>
            <Navbar />
            <div name="contact" className="pt-5 pb-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="pb-4 text-center">
                                <h2 className="font-weight-bold pb-2">
                                    <span className="border-bottom border-primary">Contact</span>
                                </h2>
                            </div>
                            <form action="https://getform.io/f/3b506296-d1e9-4a2e-ae73-06dd87fa0fb2" method="POST">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control m-3" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control m-3" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" className="form-control m-3" placeholder="Enter your message" rows="8" style={{ resize: "none" }} required></textarea>
                                </div>
                                <div className="form-group text-center mb-3">
                                    <button type="submit" className="btn btn-lg btn-block" style={{ color: "white", backgroundColor: "#FF5733" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact