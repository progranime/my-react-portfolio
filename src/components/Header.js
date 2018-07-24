import React, { Component } from 'react';
import AppLogo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isActive: false
        };

        this.onClassSwitcher = this.onClassSwitcher.bind(this);
    }

    onClassSwitcher () {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render () {
        return (
            <div>
                <div className={this.state.isActive ? "header--overlay active" : "header--overlay"} onClick={this.onClassSwitcher}></div>
                <header className="header">
                    <div className="header__container">
                        <div className={this.state.isActive ? "header__menu active" : "header__menu"} onClick={this.onClassSwitcher}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="header__logo">
                            <NavLink to="/"><img src={AppLogo} alt="app logo"/></NavLink>
                        </div>
                        <div className="header__navigation">
                            <ul className="navigation__list">
                                <li className="navigation__list-item" >
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="navigation__list-item" >
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="navigation__list-item" >
                                    <NavLink to="/portfolios">Portfolio</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

}

export default Header;