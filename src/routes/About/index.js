import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Card from '../../components/Card';
import dp from '../../images/dp.jpg';

class About extends Component {
    render () {
        let portfolios = this.props.portfolios;
        console.log(this.props)

        return (
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="heading">About Me</h1>
                    </div>
                    <div className="col-12 col-sm-4 order-sm-2 align-self-center text-center">
                        <img src={dp} alt="" className="rounded-circle"/>
                    </div>
                    <div className="col-12 col-sm-8">
                        
                        <h3>JEREMY ESPINOSA</h3>
                        <p><strong>Web Developer / Front-End Developer</strong></p>
                        <p>Lorem ipsum dolor sit amet, dicta gloriatur forensibus ei ius. 
                            Eu sed soleat prodesset, nam congue semper moderatius ad. 
                            Libris perpetua at vix, libris honestatis contentiones mei at, 
                            enim modus malorum mea ad. Per no modus reque expetendis. Cu vero 
                            omittam abhorreant ius, at wisi molestie fabellas has, usu et quem 
                            nostrum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

/* const mapStateToProps = (state) => {
    return {
        portfolios: state.portfolios
    }
} */

// export default connect(mapStateToProps) (About);
export default About;