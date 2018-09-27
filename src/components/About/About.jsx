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
                <div className="content inner-top">
                <div className="title-bg">About</div>
                <Row className="show-grid text-center service-items">
                  <Col xs={12} sm={12} className="person-wrapper">
                  <h2 className="pre-header">{page.title.rendered}</h2>
                  <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
                  </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <div class="service-item card-box">
                <div class="icon"><i class="fas fa-code"></i></div>
              <Image src="assets/creartem-bw.png" circle className="profile-pic"/>
              <div className="name">Frank</div>
              <p>That's a crooked tree. Well send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
              </div>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <div class="service-item card-box">
                <div class="icon"><i class="fas fa-code"></i></div>
              <Image src="assets/creartem-bw.png" circle className="profile-pic"/>
              <div className="name">Vanessa</div>
              <p>That's a crooked tree. Well send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
              </div>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <div class="service-item card-box">
                <div class="icon"><i class="fas fa-code"></i></div>
              <Image src="assets/creartem-bw.png" circle className="profile-pic"/>
              <div className="name">Riff</div>
              <p>That's a crooked tree. Well send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
              </div>
            </Col>
  </Row>
</div>
              </Grid>
            </div>
          )
        })
        return (
          <section id="about-page">
              {pages}
          </section>
        );
  }
}

export default About;
