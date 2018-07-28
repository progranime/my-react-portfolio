import React, { Component } from 'react';

class HeaderMenu extends Component {

    render () {
        return (
            <div className={this.props.menuState ? `header__menu active` : `header__menu` } onClick={this.props.onClassSwitcher}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default HeaderMenu;