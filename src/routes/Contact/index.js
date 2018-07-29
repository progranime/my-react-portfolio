import React, { Component } from 'react';
import * as FA from 'react-icons/lib/fa';


class Contact extends Component {
    render () {
        return (
            <div className="container py-4">

                <div className="row">
                    <div className="col-12 col-sm-6 align-self-center order-sm-2">
                        <img src="https://images.indianexpress.com/2017/05/google-maps-759.jpg" alt="" className="w-100"/>
                    </div>

                    <div className="col-12 col-sm-6 order-sm-1">
                        <h3 className="heading">Contact Us</h3>
                        <p>React out me for any inquiries</p>

                        <form action="">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" name="first_name" className="form-control" id="first_name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" id="email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" className="form-control"></textarea>
                            </div>

                            <input type="button" className="btn btn--standard btn-block" value="Hire Me!"/>
                        
                        </form>

                    </div>
                    
                </div>

                <div className="row py-5">
                    <div className="col-12 col-sm-4">
                        <div className="row">
                            <div className="col-4 text-center align-self-center">
                                <FA.FaMapMarker className="icon icon--sm"/>
                            </div>
                            <div className="col-8 align-self-center">
                                <h6>Location:</h6>
                                <p className="subheading">Pasig City</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="row">
                            <div className="col-4 text-center align-self-center">
                                <FA.FaEnvelopeO className="icon icon--sm"/>
                            </div>
                            <div className="col-8">
                                <h6>Email:</h6>
                                <p className="subheading">jeremyespinosa1995@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="row">
                            <div className="col-4 text-center align-self-center">
                                <FA.FaPhone className="icon icon--sm"/>
                            </div>
                            <div className="col-8 align-self-center">
                                <h6>Phone:</h6>
                                <p className="subheading">+63 9159795830</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;