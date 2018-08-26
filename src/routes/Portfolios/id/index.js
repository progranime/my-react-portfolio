import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Portfolio extends Component {

    componentDidMount () {
        console.log(this.props.portfolios)
    }

    render () {
        let portfoliosLink = this.props.portfolios.map( (item) => {
            return (
                <li key={item.id}><Link to={`/portfolio/${item.id}`}>{item.title}</Link></li>
            )
        })

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
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 col-sm-8 order-2 order-sm-1">
                        <h3 className="heading">{this.props.portfolio[0].title}</h3>
                        <div className="cards row">
                            {portfolios}
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 order-1 order-sm-2">
                        <h5>Portfolios List</h5>
                        <ul class="list">
                            {portfoliosLink}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    portfolios: state.portfolios,
    portfolio: state.portfolios.filter( (data) => {
        return data.id == props.match.params.id
    })
})


export default connect(mapStateToProps) (Portfolio)