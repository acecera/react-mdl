import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ProfileImage from "../../images/Avatar.png";
import './Contact.css';

class Contact extends Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked');
    };

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anthony Cera</h2>
                        <img src={ProfileImage} alt="profile pic" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '2em', fontFamily: 'Oswald'}}>
                            Please contact me at anytime if you have any questions or inquiries. Also feel free to check out my GitHub or LinkedIn, Thank you!
                        </p>
                        <i className="fas fa-long-arrow-alt-right" aria-hidden="true" style={{fontSize: '90px'}}/> 
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: "Oswald"}}>
                                        <i className="fas fa-mobile"/>
                                        (818) 383-8917
                                    </ListItemContent>
                                </ListItem>

                                 <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: "Oswald"}}>
                                        <i className="far fa-envelope" aria-hidden="true" />
                                        coordinatorace@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                 <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: "Oswald"}}>
                                        <a href="https://www.linkedin.com/in/anthony-cera-151b9440/" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/anthony-cera-151b9440/" style={{textDecoration: 'none'}}>LinkedIn</a>
                                    </ListItemContent>
                                </ListItem>

                                 <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: "Oswald"}}>
                                        <a href="https://github.com/acecera" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-github-square" aria-hidden="true" />
                                        </a>
                                        <a href="https://github.com/acecera" style={{textDecoration: 'none'}}>GitHub</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;