import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class HeaderNavigation extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navLinks: [
                {
                    label: 'Home',
                    link: '/'
                },
                {
                    label: 'About',
                    link: '/about'
                },
                {
                    label: 'Portfolios',
                    link: '/portfolios'
                }
            ]
        }
    }


    render () {
        let navLinks = this.state.navLinks.map( (navLink) => {
            return (
                <li className="navigation__list-item" >
                    <NavLink to={navLink.link}>{navLink.label}</NavLink>
                </li>
            )
        })
        return (
            <div className="header__navigation">
                <ul className="navigation__list">
                    {navLinks}
                </ul>
            </div>
        );
    }

}

export default HeaderNavigation;