import React, { Component } from 'react';
import dp from '../images/dp.jpg';

import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    
    render () {
        let portfolios = this.props.state.portfoliosReducer;
        return (
            <div className="container">

                <section>
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center">
                            <img src={dp} alt="" className="mw-100 rounded-circle"/>
                        </div>
                        <div className="col-12 col-sm-6 align-self-center">
                            <h3>JEREMY ESPINOSA</h3>
                            <p>Web Developer</p>
                            <NavLink to="/about">Learn More About Me</NavLink>
                        </div>
                    </div>
                </section>    

                <hr className="hr hr--tag" />

                <section>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">PORTFOLIO</h1>
                        </div>
                        <div className="col-12">
                            <Card data={portfolios} />
                        </div>
                    </div>
                </section>

                <hr className="hr hr--tag" />

                <section>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">GET IN TOUCH</h1>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        state
    }
};

export default connect(mapStateToProps) (Home);