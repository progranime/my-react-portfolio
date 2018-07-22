import React, { Component } from 'react';

class Banner extends Component {
    
    render () {
        return (
            <div className="banner">
                <div className="banner__container">
                    <div className="banner__img"></div>
                    <div className="banner__overlay">
                        <div className="banner__content">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Banner;

    
