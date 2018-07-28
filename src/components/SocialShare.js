import React, { Component } from 'react';
import linkedInLogo from '../assets/linkedin.png';

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
                                <a href="#"><img src={linkedInLogo} alt=""/></a>
                            </li>
                            <li className="list__item">
                                <a href="#"><img src={linkedInLogo} alt=""/></a>
                            </li>
                            <li className="list__item">
                                <a href="#"><img src={linkedInLogo} alt=""/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default SocialShare;

    
