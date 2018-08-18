import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProfileImage from "../images/AnthonyC.jpg";

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="lp-grid">
                    <Cell col={12}>
                        <img 
                          src={ProfileImage}
                          alt="profile pic"
                          className="profile-img"/>
                        <div className="banner">
                            <h1>Full Stack Web Developer</h1>
                        </div>

                        <hr className="hr"/>

                        <p>HTML/CSS | Bootstrap | JavaScript | NodeJS | React/Redux | MySQL | </p>

                        <div className="links">

                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;