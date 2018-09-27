import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

class About extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://localhost/wpapi/wp-json/wp/v2/pages?slug=about embed";
    fetch(pagesURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pages: response
      })
    })
  }
  render() {
    let pages = this.state.pages.map((page, index) => {
          return (
            <div key={index}>
              <Grid>
              <h2 className="pre-header">{page.title.rendered}</h2>
              <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
              </Grid>
            </div>
          )
        })
        return (
          <section>
              {pages}
          </section>
        );
  }
}

export default About;
