import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import * as FA from 'react-icons/lib/fa'
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
        })

        let tools = this.props.details.tools.map( (tool, index) => {
            return <li key={index}>{tool}</li>
        })

        let awards = this.props.details.awards.map( (award, index) => {
            return <li key={index}>{award}</li>
        })

        let projects = this.props.details.projects.map( (project, x) => {

            let responsibilities = project.responsibilities.map( (responsibility, y) => {
                return (
                    <li key={y}>{responsibility}</li>
                )
            })

            return (
                <li key={x}>
                    <p className="mb-0"><strong>{project.title}</strong> - {project.designation}</p>
                    <ul className="list">
                        {responsibilities}
                    </ul>
                    
                </li>
            )
        })

        let experiences = this.props.details.experiences.map( (experience, x) => {
            let responsibilities = experience.responsibilities.map( (responsibility, y) => {
                return (
                    <li key={y}>{responsibility}</li>
                )
            })

            return (
                <li key={x}>
                    <p className="mb-0"><strong>{experience.company}</strong> - {experience.designation}</p>
                    <p className="mb-0"><i>{experience.tenure}</i></p>

                    <ul className="list">
                        {responsibilities}                        
                    </ul>
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
                        <img src={`${process.env.PUBLIC_URL}/images/casual-dp.jpg`} alt="" className="w-100"/>
                        <a href={`${process.env.PUBLIC_URL}/docs/jeremy-espinosa-resume.pdf`} className="btn btn--rounded btn-block mt-3" target="_blank" download>Download Resume</a>
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
                                        <p><i><strong>Web Developer / Front-End Developer</strong></i></p>

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
                                        <h4 className="heading">Skills</h4>
                                        <ul className="list">
                                            {skills}
                                        </ul>

                                        <h4 className="heading">Tools</h4>
                                        <ul className="list">
                                            {tools}
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
                                        <h4 className="heading">Work Experience</h4>

                                        <ul className="list">
                                            {experiences}
                                        </ul>

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