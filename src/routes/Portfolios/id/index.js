import React, { Component } from 'react';

class Portfolio extends Component {
    render () {
        console.log(this.props.match.params.id)
        return (
            <div className="container">
                Single Portfolio {this.props.match.params.id}
            </div>
        );
    }
}

export default Portfolio;