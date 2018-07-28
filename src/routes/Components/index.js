import React, { Component } from 'react';
import banner from '../../assets/banner.jpg';

class Components extends Component {
    render () {
        return (
            <div className="">
                <h1>Components</h1>

                <h3>Header</h3>
                <header className="header">
                    <div className="header__container">
                        <div className="header__menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="header__logo">
                            <h6>JEREMY</h6>
                        </div>
                        <nav className="header__nav">
                            <ul className="nav__list">
                                <li className="nav__list-item"><a href="#">Home</a></li>
                                <li className="nav__list-item"><a href="#">About</a></li>
                                <li className="nav__list-item"><a href="#">Portfolios</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Buttons</h3>
                        </div>
                        <div className="col-3">
                            <p>btn--standard</p>
                            <a href="#" className="btn btn--standard">Submit</a>
                        </div>
                        <div className="col-3">
                            <p>btn--outline</p>
                            <a href="#" className="btn btn--outline">Submit</a>
                        </div>
                        <div className="col-3">
                            <p>btn--rounded</p>
                            <a href="#" className="btn btn--rounded">Submit</a>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Heading</h3>
                        </div>
                        <div className="col-12">
                            <h1 className="heading">Home</h1>
                            <h2 className="heading">About Us</h2>
                            <h3 className="heading">Portfolios</h3>
                            <h4 className="heading">Contact Us</h4>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12">
                        <h3>Banner</h3>
                        <div className="banner">
                            <div className="banner__container">
                                <div className="banner__overlay"></div>
                                <div className="banner__img-holder" style={{backgroundImage: `url(${banner})`}} ></div>
                                <div className="banner__content">
                                    <h1>ERROR 404</h1>
                                    <p>The page you were looking for could not be found</p>
                                    <a href="#" className="btn btn--rounded">BACK TO HOME PAGE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Components