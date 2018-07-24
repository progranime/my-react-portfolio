import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cardBg from '../images/card-bg.jpg';

class Card extends Component {
    render () {
        let cards = this.props.data.map( (card) => {
            return (
                <div className="card" key={card.id}>
                    <div className="card__img-holder">
                        <img src={cardBg} alt="" />
                    </div>
                    <div className="card__body">
                        <div className="card__overlay"></div>
                        <div className="card__content">
                        <h1 className="title">{card.title}</h1>
                        <p className="description">{card.description}</p>
                        <NavLink to={`portfolio/${card.id}`} className="btn btn--action btn--outline text-uppercase">View More</NavLink>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="cards">
                {cards} 
            </div>
        );
    }
}

export default Card;