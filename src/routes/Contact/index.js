import React, { Component } from 'react';

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

            </div>
        );
    }
}

export default Contact;