import React, { Component } from 'react';
import banner from '../../assets/banner.jpg';
import { Link } from 'react-router-dom'; 

class Error extends Component {
    render () {
        return (
            <div className="banner">
                <div className="banner__container">
                    <div className="banner__overlay"></div>
                    <div className="banner__img-holder" style={{backgroundImage: `url(${banner})`}} ></div>
                    <div className="banner__content">
                        <h1>ERROR 404</h1>
                        <p>The page you were looking for could not be found</p>
                        <Link to="/" className="btn btn--rounded">BACK TO HOME PAGE</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;