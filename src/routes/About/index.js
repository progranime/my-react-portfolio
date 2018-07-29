import React, { Component } from 'react';
import casualDp from '../../assets/casual-dp.jpg';
import resume from '../../assets/docs/jeremy-espinosa-resume.pdf';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import * as FA from 'react-icons/lib/fa';
import musictribe from '../../assets/musictribe.png';

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

        return (
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 d-block d-sm-none">
                        <h1 className="heading">About Me</h1>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img src={casualDp} alt="" className="w-100"/>
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
                                        <p>I am seeking employment with a company where I can use my skills to grow and be an asset to the company
                                        especially in the field of software development. Willing to learn different programming languages and tools
                                        that will enhance and further strengthen my skills.</p>

                                        <h4 className="heading">Profile</h4>
                                        <ul className="list list--inline">
                                            <li className="list__item">
                                                <a href="https://linkedin.com/in/jeremy-espinosa-213236119/" target="_blank"><FA.FaLinkedinSquare className="icon icon--xs"/></a>
                                            </li>
                                            <li className="list__item">
                                                <a href="https://github.com/progranime" target="_blank"><FA.FaGithubSquare className="icon icon--xs"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="heading">Education</h4>
                                        <ul>
                                            <li><strong>School: </strong>Technological Institute of the Philippines (TIP), Quezon City</li>
                                            <li><strong>Year: </strong>2012-2016</li>
                                            <li><strong>Course: </strong>BS Computer Science</li>
                                        </ul>

                                        <h4 className="heading">Certifications and Awards</h4>
                                        <ul>
                                            <li>Certificate of Recognition for being on the Dean’s List for First Semester, School Year 2013-2014</li>
                                            <li>Certificate of Participation and Awarded 3rd place in Philippine Programming Challenge 2015</li>
                                            <li>Certificate of Recognition as member of the team that won 3rd place in the Philippine Programming Challenge 2015</li>
                                            <li>Certificate of Recognition for being on the Dean’s List for First Semester, School Year 2015-2016</li>
                                            <li>Certificate of Recognition for being on the VPAA’s List for Second Semester, School Year 2015-2016</li>
                                            <li>Certificate of Recognition for winning 3rd place in the Science and Technology Fair 2016 during TIP’s 54th Foundation Anniversary</li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="heading">Knowledge, Skills and Attitude</h4>
                                        <ul>
                                            <li>Proficient in using programming languages such as Java, Android, HTML5, CSS3 (LESS/SASS), JavaScript (jQuery), AJAX, PHP and MySQL.</li>
                                            <li>Following the Mobile First Design and Modular Coding.</li>
                                            <li>Knowledge in Content Management System like WordPress.</li>
                                            <li>Knowledge in using MVC Framework in PHP like CodeIgniter.</li>
                                            <li>Knowledge in using Adobe Photoshop, Eclipse, Android Studio, Windows IIS7 , Git, Tortoise SVN, Task Runner (Grunt, Gulp), NPM, NVM.</li>
                                            <li>Determined and eager to learn anything that can help me to improve and adapt different tools that would help the development of the project.</li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>

                            <TabPane tabId="4">
                                
                                <div className="row">
                                    <div className="col-12">
                                    <h4 className="heading">Designs, Projects Completed</h4>
                                        <ul>
                                            <li>
                                                <p className="subheading"><strong>AvatarMaker</strong></p>
                                                <p>Lead programmer creates an avatar that can fully customized, 
                                                using HTML5, CSS3 (Bootstrap, SASS), Javascript (jQuery), AJAX, 
                                                HandlebarJS (Templating), Gulp (JS Task Runner) and CodeIgniter 
                                                (PHP Framework).</p>
                                            </li>
                                            
                                            <li>
                                                <p className="subheading"><strong>Job Description / Pledge</strong></p>
                                                <p>Lead programmer creates the job description of the employee of the company, 
                                                    using HTML5, CSS3(Bootstrap, SASS), Javascript (jQuery), AJAX, HandlebarJS (Templating), 
                                                    Gulp (JS Task Runner), and CodeIgniter (PHP Framework).</p>
                                            </li>

                                            <li>
                                                <p className="subheading"><strong>Superants Inc. Website</strong></p>
                                                <p>Lead Programmer, using HTML5, CSS3, Bootstrap, Javascript, Jquery, PHP and a PHP Framework CodeIgniter.</p>
                                            </li>

                                            <li>
                                                <p className="subheading"><strong>GeoSCAN</strong></p>
                                                <p>Programmer & Concept Developer, create an android application that gives 
                                                    civilian awareness on the crime happening to his/her surroundings and 
                                                    automatically report it to the police authorities. This application will 
                                                    provide authentic data using GeoSCAN application.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    
                            </TabPane>

                            <TabPane tabId="5">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="heading">Professional Experience</h4>

                                        <div className="row">
                                            <div className="col-6">
                                                <h6 className="subheading">Music Tribe</h6>
                                                <ul className="list">
                                                    <li className="list__item"><strong>Position: </strong>Web Specialist</li>
                                                    <li className="list__item"><strong>Year: </strong>Aug 2017 - Present</li>
                                                </ul>
                                            </div>

                                            <div className="col-6">
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

/* const mapStateToProps = (state) => {
    return {
        portfolios: state.portfolios
    }
} */

// export default connect(mapStateToProps) (About);
export default About;