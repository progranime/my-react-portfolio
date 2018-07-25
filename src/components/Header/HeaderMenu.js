import React, { Component } from 'react';

class HeaderMenu extends Component {

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
            <div className={this.state.isActive ? "header__menu active" : "header__menu"}
                 onClick={this.onClassSwitcher}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default HeaderMenu;