import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Portfolio extends Component {
    render () {

        console.log(this.props.portfolios)

        let portfolios = this.props.portfolios.map( (portfolio, index) => {
            return (
                <div className="card col-12 col-sm-3" key={index}>
                    <div className="card__container">
                        <div className="card__body">
                            <div className="card__img-holder">
                                <img src={process.env.PUBLIC_URL + '/' + portfolio.thumbnail} alt=""/>
                            </div>
                            <div className="card__img-overlay"></div>
                            <div className="card__content">
                                <h4>{portfolio.title}</h4>
                                <p>{portfolio.description}</p>
                                <Link to={`portfolio/${portfolio.id}`} className="btn btn--overlay">See More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="container py-4">

                <div className="cards row">
                    {portfolios}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    portfolios: state.portfolios
})

export default connect(mapStateToProps) (Portfolio);