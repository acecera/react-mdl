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

                        <div className="links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/anthony-cera-151b9440/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/acecera" rel="noopener noreferrer" target="_blank">
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