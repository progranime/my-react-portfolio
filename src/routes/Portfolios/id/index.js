import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Portfolio extends Component {

    constructor (props) {
        super(props)
        this.state = {
            quickView: false,
            quickViewListActiveIndex: 0
        }
    }

    onClassSwitcher (index) {
        this.setState({
            quickView: !this.state.quickView,
            quickViewListActiveIndex: index
        })
    }

    render () {
        let portfoliosLink = this.props.portfolios.map( (item, i) => {
            let className = this.state.quickViewListActiveIndex === i  ? `quick-view__list-item is-active` : `quick-view__list-item`

            return (
                <li key={item.id} className={className} onClick={this.onClassSwitcher.bind(this, i)}>
                    <Link to={`/portfolio/${item.id}`} >{item.title}</Link>
                </li>
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
                
                <div className={this.state.quickView ? `quick-view is-active` : `quick-view`}>
                    <div className="quick-view__container">
                        <div className="quick-view__action-container">
                            <span onClick={this.onClassSwitcher.bind(this, this.state.quickViewListActiveIndex)}>Portfolio List</span>
                        </div>
                        <ul className="quick-view__list">
                            {portfoliosLink}
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h3 className="heading">{this.props.portfolio[0].title}</h3>
                        <div className="cards row">
                            {portfolios}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    portfolios: state.portfolios,
    portfolio: state.portfolios.filter( (data) => {
        return data.id === props.match.params.id
    })
})


export default connect(mapStateToProps) (Portfolio)