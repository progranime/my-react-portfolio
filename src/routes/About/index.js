import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

class About extends Component {
    render () {
        let portfolios = this.props.portfolios;
        console.log(this.props)

        return (
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">ABOUT ME</h1>
                        </div>
                        <div className="col-12">
                            <p>Lorem ipsum dolor sit amet, mea id libris possim verterem, 
                                impetus singulis prodesset pro an. Cetero aeterno quo ei, 
                                eius rationibus cum eu. Minimum dissentiet mediocritatem eos 
                                id. Pri te aeque euismod imperdiet. Deserunt reprimique nec 
                                id, sit ei solet incorrupte.
                            </p>
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
                            <h1 className="text-center">Experience</h1>
                        </div>
                        <div className="col-12">
                        
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        portfolios: state.portfolios
    }
}

export default connect(mapStateToProps) (About);