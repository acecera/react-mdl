import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is React</h1></div>
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