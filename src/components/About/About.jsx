import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

class About extends Component {
  render() {
    return (
      <section>
      <Grid>
        <Jumbotron>
          <h2>Welcome to Creartem.nz</h2>
          <p>This is a student run web design agency.</p>
            <Link to="/">
              <Button bsStyle="primary">Home</Button>
            </Link>
        </Jumbotron>
      </Grid>
      </section>
    );
  }
}

export default About;
