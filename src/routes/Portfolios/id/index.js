import React, { Component } from 'react';
import { connect } from 'react-redux'

class Portfolio extends Component {

    componentDidMount () {
        console.log(this.props.portfolio[0].images)
    }

    render () {
        let portfolios = this.props.portfolio[0].images.map( (image, index) => {
            return (
                <div className="card col-12 col-sm-3" key={index}>
                    <div className="card__container">
                        <div className="card__body">
                            <div className="card__img-holder">
                                <img src={process.env.PUBLIC_URL + '/' + image} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <h3 className="heading">{this.props.portfolio[0].title}</h3>
                <div className="cards row">
                    {portfolios}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    portfolio: state.portfolios.filter( (data) => {
        return data.id == props.match.params.id
    })
})


export default connect(mapStateToProps) (Portfolio)