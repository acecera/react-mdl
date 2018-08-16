import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProfileImage from "../images/AnthonyC.jpg";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anthony Cera</h2>
                        <img src={ProfileImage} alt="profile pic" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '2em'}}>Please fill out the form to contact me!</p>
                    </Cell>
                    <Cell col={6}></Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;