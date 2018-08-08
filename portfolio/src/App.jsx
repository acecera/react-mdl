import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content} from "react-mdl";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header title="Anthony Cera" scroll>
                  <Navigation>
                      <a href="/">About</a>
                      <a href="/">Skills</a>
                      <a href="/">Portfolio</a>
                      <a href="/">Contact</a>
                  </Navigation>
              </Header>
              <Drawer title="Anthony Cera">
                  <Navigation>
                      <a href="/">About</a>
                      <a href="/">Skills</a>
                      <a href="/">Portfolio</a>
                      <a href="/">Contact</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
              </Content>
          </Layout>
      </div>

    );
  }
}

export default App;
