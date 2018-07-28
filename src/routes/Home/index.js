import React, { Component } from 'react';
import Card from '../../components/Card';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPortfolios } from '../../actions/portfolios-action';
import banner from '../../images/banner.jpg';


class Home extends Component {

    render () {
        let portfolios = this.props.portfolios;
        return (
            <div>
                <div className="banner">
                    <div className="banner__container">
                        <div className="banner__overlay"></div>
                        <div className="banner__img-holder" style={{backgroundImage: `url(${banner})`}} ></div>
                        <div className="banner__content">
                            <h1>WEB DEVELOPMENT</h1>
                            <p>Let's transform your idea into Website</p>
                            <Link to="/about" class="btn btn--overlay">Learn More About Me </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        portfolios: state.portfolios
    }
}

const mapActionsToProps = {
    onGetAllPortfolios: getAllPortfolios
}

export default connect(mapStateToProps, mapActionsToProps) (Home)