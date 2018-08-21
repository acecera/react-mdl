import React from "react";
import LandingPage from "./LandingPage/landingPage";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Routes;
