import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class HeaderNavigation extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navLinks: [
                {
                    id: 1,
                    label: 'Home',
                    link: '/'
                },
                {
                    id: 2,
                    label: 'About',
                    link: '/about'
                },
                /* {
                    id: 3,
                    label: 'Contact',
                    link: '/contact'
                }, */
                {
                    id: 4,
                    label: 'Portfolios',
                    link: '/portfolios'
                }
            ]
        }
    }


    render () {
        let navLinks = this.state.navLinks.map( (navLink) => {
            return (
                <li className="nav__list-item" key={navLink.id}>
                    <NavLink exact to={navLink.link} onClick={this.props.onClassSwitcher}>{navLink.label}</NavLink>
                </li>
            )
        })
        return (
            <nav className={this.props.menuState ? `header__nav active` : `header__nav`}>
                <ul className="nav__list">
                    {navLinks}
                </ul>
            </nav>
        );
    }

}

export default HeaderNavigation;