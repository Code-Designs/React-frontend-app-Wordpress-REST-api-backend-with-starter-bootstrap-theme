import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="about">
                        <NavIcon>
                            <i className="fa fa-fw fa-info" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <Home />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/about" component={props => <About />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>

    );
  }
}

export default App;
