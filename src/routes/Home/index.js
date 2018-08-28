import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {

    render () {
        let keySkills = this.props.details.keySkills.map( (keySkill, x) => {
            return (
                <div className="col-12 col-sm-4" key={x}>
                    <div className="skill">
                        <div className="skill__container">
                            <div className="skill__icon">{keySkill.label}</div>
                            <div className="skill__details">
                                <span>{keySkill.name}</span>
                            </div>
                            <div className="skill__progress">
                                <div className="skill__progress-bar" style={{width: keySkill.rating + '%'}}>
                                    <span>{keySkill.rating}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="banner banner--parallax">
                    <div className="banner__container">
                        <div className="banner__overlay"></div>
                        <div className="banner__img-holder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)`}} ></div>
                        <div className="banner__content banner__content--center">
                            <h1>WEB DEVELOPMENT</h1>
                            <p>Let's transform your idea into Website</p>
                            <a href="#about" className="btn btn--overlay">See More </a>
                        </div>
                    </div>
                </div>

                {/* About Me Section */}
                <div className="row" id="about">
                    <div className="col-12 col-sm-4">
                        <img src={`${process.env.PUBLIC_URL}/images/casual-dp.jpg`} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 col-sm-8 p-4 align-self-center">
                        <h3>Hello I'm Jeremy</h3>
                        <p><strong><i>Web Developer</i></strong></p>
                        <p>Experienced Web Developer seeking opportunity to bring knowledge of programming. 
                            And a self-motivated IT professional with huge knowledge and proficiency in HTML, 
                            CSS, JavaScript, PHP and mobile responsive web development, as well as strong skills 
                            and ability in writing clean and efficient code.
                        </p>
                        <Link to="/about" className="btn btn--outline">Learn More About Me</Link>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="banner banner--parallax">
                    <div className="banner__container banner__container--md">
                        <div className="banner__overlay"></div>
                        <div className="banner__img-holder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner2.jpg)`}} ></div>
                        <div className="banner__content">
                            <h3 className="py-4 text-center">SKILLS</h3>
                            <div className="row">
                                {keySkills}
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* Portfolio Section */}



            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    details: state.details
})

export default connect(mapStateToProps) (Home)