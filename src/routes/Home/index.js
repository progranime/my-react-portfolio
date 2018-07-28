import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPortfolios } from '../../actions/portfolios-action';
import banner from '../../assets/banner.jpg';


class Home extends Component {

    render () {
        return (
            <div>
                <div className="banner">
                    <div className="banner__container">
                        <div className="banner__overlay"></div>
                        <div className="banner__img-holder" style={{backgroundImage: `url(${banner})`}} ></div>
                        <div className="banner__content">
                            <h1>WEB DEVELOPMENT</h1>
                            <p>Let's transform your idea into Website</p>
                            <Link to="/about" className="btn btn--overlay">Learn More About Me </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

/* const mapStateToProps = (state, props) => {
    return {
        portfolios: state.portfolios
    }
}

const mapActionsToProps = {
    onGetAllPortfolios: getAllPortfolios
} */

// export default connect(mapStateToProps, mapActionsToProps) (Home)
export default Home