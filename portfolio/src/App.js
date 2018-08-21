import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content} from "react-mdl";
import Routes from './Components/routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{color: 'white', textDecoration: 'none'}} to="/">Anthony Cera</Link>} scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Anthony Cera">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Routes />
              </Content>
          </Layout>
      </div>

    );
  }
}

export default App;
