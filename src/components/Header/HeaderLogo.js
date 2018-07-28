import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderLogo extends Component {

    render () {
        return (
            <div className="header__logo">
                <NavLink to="/"><h6>JEREMY</h6></NavLink>
            </div>
        );
    }
}

export default HeaderLogo;