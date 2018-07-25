import React, { Component } from 'react';
import AppLogo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

class HeaderLogo extends Component {

    render () {
        return (
            <div className="header__logo">
                <NavLink to="/"><img src={AppLogo} alt="app logo"/></NavLink>
            </div>
        );
    }
}

export default HeaderLogo;