import React, { Component } from 'react';
import HeaderMenu from './Header/HeaderMenu';
import HeaderLogo from './Header/HeaderLogo';
import HeaderNavigation from './Header/HeaderNavigation';

class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {
            menuState: false
        }

        this.onClassSwitcher = this.onClassSwitcher.bind(this)
    }

    onClassSwitcher () {
        this.setState({
            menuState: !this.state.menuState
        })
    }

    render () {

        return (
            <header className="header">
                <div className="header__container">
                    
                    <HeaderMenu onClassSwitcher={this.onClassSwitcher} menuState={this.state.menuState}/>
                    
                    <HeaderLogo />
                    
                    <HeaderNavigation onClassSwitcher={this.onClassSwitcher} menuState={this.state.menuState}/>
                </div>
            </header>
        );
    }

}

export default Header;