import React, { Component } from 'react';
import linkedInLogo from '../assets/linkedin.png';
import * as FA from 'react-icons/lib/fa';

class SocialShare extends Component {
    
    render () {
        return (
            <div>
                <div className="social-share">
                    <div className="social-share__container">
                        <ul className="list">
                            <li className="list__item-title">
                                PROFILE
                            </li>
                            <li className="list__item">
                                <a href="https://linkedin.com/in/jeremy-espinosa-213236119/" target="_blank"><FA.FaLinkedinSquare className="icon icon--xs"/></a>
                            </li>
                            <li className="list__item">
                                <a href="https://github.com/progranime" target="_blank"><FA.FaGithubSquare className="icon icon--xs"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default SocialShare;

    
