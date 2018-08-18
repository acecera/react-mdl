import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from "react-mdl";


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    {/*Project 1*/}
                    <Card shadow={4} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                        'url() center/ cover'}}>React Project 1</CardTitle>
                        <CardText>
                            This is the description.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is JavaScript</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="portfolio-grid">
                    <Grid className="portfolio-grid">
                        <Cell>
                            <div>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Portfolio;