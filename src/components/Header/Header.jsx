import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar default collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Creartem.nz</Link>
              </Navbar.Brand>
             <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} componentClass={Link} class="icon fas fa-home fa-2x" href="/" to="/">
                  <span> Home</span>
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} class="icon fas fa-info fa-2x" href="/about" to="/about">
                  <span> About</span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
           </Navbar>
    );
  }
}

export default Header;
