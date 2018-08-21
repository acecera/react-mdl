import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from "../../images/hackerAvatar.png";
import Skills from '../skills';

class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src={Avatar}
                            alt="avatar"
                            />
                        </div>

                        <h2 style={{paddingTop: '2em', fontFamily: 'Anton'}}>Anthony "Ace" Cera</h2>
                        <h4 style={{color: 'grey', fontFamily: 'Anton'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid silver', width: '50%'}} />
                        <p style={{fontFamily: 'Anton', fontSize: '14px'}}>I am Web Developer based out of Los Angeles with a desire to grow and expand my knowledge as a Developer.
                            In my free time I enjoy learning new technologies on udemy, hanging out with my family and friends, snowboarding, golfing and playing music. I have two dogs 
                            named Dre and Jade that I like to take on hikes around LA whenever possible. 
                        </p>
                    </Cell>
                    <Cell className="skills-right-col" col={8}>
                        <Skills 
                          skill="Javascript"
                          progress={100}
                          />
                        <Skills 
                          skill="HTML5/CSS3"
                          progress={80}
                          />
                        <Skills
                          skill="Node.js"
                          progress={60}
                          />
                        <Skills 
                          skill="React.js"
                          progress={35}
                          /> 
                        <Skills
                          skill="Redux"
                          progress={30}
                          />
                        <Skills
                          skill="Java"
                          progress={20}
                          />
                        <Skills 
                          skill="MongoDB"
                          progress={30}
                          />
                        <Skills 
                          skill="MySQL"
                          progress={30}
                          />
                        <Skills
                          skill="SASS"
                          progress={20}
                          />
                        <Skills
                          skill="Animation"
                          progress={20}
                          />
                        <Skills
                          skill="UI"
                          progress={30}
                          />  
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;