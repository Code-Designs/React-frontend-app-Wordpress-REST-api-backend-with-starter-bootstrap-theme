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
    let pagesURL = "http://creartem.nz/wp-json/wp/v2/pages?slug=about embed";
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



            <Row>
            <Col xs={12} sm={12} className="person-wrapper-img">
            <img src="assets/technology-globe.png" />
            </Col>
            </Row>






              <div className="service-item card-box">
                <div className="icon"><i className="fas fa-code"></i></div>

              <div className="name">Web Design</div>
              <p>Web design is an important aspect of any website, it helps you to gain more traffic on your website.
<ul className="liststylecircle">
<li>Planning how a website will look, feel and be used</li>
<li>Aesthetic aspects such as layout, colour, contrast, font choice, sizing, consistency and unity</li>
<li>Navigational aspects and how information will be presented.</li>
</ul>
</p>
              </div>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <div className="service-item card-box">
                <div className="icon"><i className="fa fa-database"></i></div>

              <div className="name">Back-end Developers</div>
              <p> Your website has layers
              <ul className="liststylecircle">
              <li>Structure</li>
              <li>Design</li>
              <li>Content</li>
                <li>Functionality</li>
                  The back-end is what you don’t see but what makes the site run. This is the server, the database and server-side applications (behind the scenes functionality).
              </ul>
               </p>

              </div>




              <Row>
              <Col xs={12} sm={12} className="person-wrapper-img">
              <img src="assets/Web-Technology-globe.png" />
              </Col>
              </Row>













            </Col>
            <Col xs={12} sm={4} className="person-wrapper">



            <Row>
            <Col xs={12} sm={12} className="person-wrapper-img">
            <img src="assets/webglobe.png" />
            </Col>
            </Row>










              <div className="service-item card-box">
                <div className="icon"><i className="fab fa-react"></i></div>

              <div className="name">Full-Stack Developers</div>
              <p>Full stack developers work with both the front and back end of a website. They’re familiar with
              <ul className="liststylecircle">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>php</li>
              <li>React</li>
              <li>Angular</li>
            and possibly more back end languages.
            </ul>
              </p>
              </div>
            </Col>
  </Row>
  <Row>
  <Col xs={12} sm={12} className="person-wrapper">
  <img src="http://webbetasolutions.com/wp-content/uploads/2016/07/technology-01.png" />
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
