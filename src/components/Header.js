import React, { Component } from 'react';
import HeaderLogo from './Header/HeaderLogo';
import HeaderNavigation from './Header/HeaderNavigation';
import HeaderMenu from './Header/HeaderMenu';

class Header extends Component {

    render () {
        return (
            <div>
                <div className="header--overlay"></div>
                <header className="header">
                    <div className="header__container">

                        <HeaderMenu />

                        <HeaderLogo />

                        <HeaderNavigation />

                    </div>
                </header>
            </div>
        );
    }

}

export default Header;