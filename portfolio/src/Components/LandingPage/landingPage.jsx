import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProfileImage from "../../images/AnthonyC.jpg";

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

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;