import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProfileImage from "../images/AnthonyC.jpg";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid>
                    <Cell col={6}>
                        <h2>Anthony Cera</h2>
                        <ProfileImage />
                    </Cell>
                    <Cell col={6}></Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;