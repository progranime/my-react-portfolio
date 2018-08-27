import React, { Component } from 'react'

class QuickView extends Component {

    render () {
        return (
            <div className="quick-view">
                <div className="quick-view__container">
                    <div className="quick-view__action-container">
                        <span>Portfolio List</span>
                    </div>
                    <ul className="quick-view__list">
                        <li className="quick-view__list-item is-active">
                            <a href="#">Superants Inc.</a>
                        </li>
                        <li className="quick-view__list-item">
                            <a href="#">GeoSCAN</a>
                        </li>
                        <li className="quick-view__list-item">
                            <a href="#">Police GeoSCAN</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default QuickView