import React, { Component } from 'react';
import resume from '../../assets/docs/jeremy-espinosa-resume.pdf';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import * as FA from 'react-icons/lib/fa';
import { connect } from 'react-redux'

class About extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this)
        this.state = {
            activeTab: '1'
        }

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render () {

        let skills = this.props.details.skills.map( (skill, index) => {
            return <li key={index}>{skill}</li>
        } )

        let awards = this.props.details.awards.map( (award, index) => {
            return <li key={index}>{award}</li>
        })

        let projects = this.props.details.projects.map( (project, index) => {
            return (
                <li key={index}>
                    <p className="subheading">{project.title}</p>
                    <p>{project.description}</p>
                </li>
            )
        })

        return (
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 d-block d-sm-none">
                        <h1 className="heading">About Me</h1>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img src={`${process.env.PUBLIC_URL}/casual-dp.jpg`} alt="" className="w-100"/>
                        <a href={resume} className="btn btn--rounded btn-block mt-3" target="_blank" download>Download Resume</a>
                    </div>
                    <div className="col-12 col-sm-8">
                        <h3 className="heading d-none d-sm-block">About Me</h3>
                        <Nav tabs className="nav-tabs--custom mt-4">
                            <NavItem>
                                <NavLink className={{ active: this.state.activeTab === '1' }}
                                    onClick={() => { this.toggle('1'); }}>
                                    Introduction
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={{ active: this.state.activeTab === '2' }}
                                    onClick={() => { this.toggle('2'); }}>
                                    Education
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={{ active: this.state.activeTab === '3' }}
                                    onClick={() => { this.toggle('3'); }}>
                                    Skills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={{ active: this.state.activeTab === '4' }}
                                    onClick={() => { this.toggle('4'); }}>
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={{ active: this.state.activeTab === '5' }}
                                    onClick={() => { this.toggle('5'); }}>
                                    Experience
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent className="tab-content--custom" activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <div className="row">
                                    <div className="col-12">
                                        <h4>JEREMY ESPINOSA</h4>
                                        <p className="subheading"><strong>Web Developer / Front-End Developer</strong></p>

                                        <h4 className="heading">Objective</h4>
                                        <p>{this.props.details.objectives}</p>

                                        <h4 className="heading">Profile</h4>
                                        <ul className="list list--inline ml-0">
                                            <li className="list__item">
                                                <a href="https://linkedin.com/in/jeremy-espinosa-213236119/" target="_blank" rel="noopener noreferrer"><FA.FaLinkedinSquare className="icon icon--xs"/></a>
                                            </li>
                                            <li className="list__item">
                                                <a href="https://github.com/progranime" target="_blank" rel="noopener noreferrer"><FA.FaGithubSquare className="icon icon--xs"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="heading">Education</h4>
                                        <ul className="list">
                                            <li><strong>School: </strong>Technological Institute of the Philippines (TIP), Quezon City</li>
                                            <li><strong>Year: </strong>2012-2016</li>
                                            <li><strong>Course: </strong>BS Computer Science</li>
                                        </ul>

                                        <h4 className="heading">Certifications and Awards</h4>
                                        <ul className="list">
                                            {awards}
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="heading">Knowledge, Skills and Attitude</h4>
                                        <ul className="list">
                                            {skills}
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>

                            <TabPane tabId="4">

                                <div className="row">
                                    <div className="col-12">
                                    <h4 className="heading">Designs, Projects Completed</h4>

                                        <ul className="list">
                                            {projects}
                                        </ul>
                                    </div>
                                </div>

                            </TabPane>

                            <TabPane tabId="5">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="heading">Professional Experience</h4>

                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <h6 className="subheading">Music Tribe</h6>
                                                <ul className="list">
                                                    <li className="list__item"><strong>Position: </strong>Web Specialist</li>
                                                    <li className="list__item"><strong>Year: </strong>Aug 2017 - Present</li>
                                                </ul>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <h6 className="subheading">Gee Pacific</h6>
                                                <ul className="list">
                                                    <li className="list__item"><strong>Position: </strong>Web Developer</li>
                                                    <li className="list__item"><strong>Year: </strong>June 2016 - June 2017</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    details: state.details
})

export default connect(mapStateToProps) (About);
// export default About;