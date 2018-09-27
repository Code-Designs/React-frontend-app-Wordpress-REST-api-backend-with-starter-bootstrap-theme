import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Particles from 'react-particles-js';
import Typist from 'react-typist';

const particleOpt = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 1000
        }
      }
    }
}

class Home extends Component {
  render() {
    return (
      <Grid>
        <div className="card-inner card-started active" id="home-card">

				<div id="particles-bg" className="slide">
          <Particles className="slide-part"
              params={particleOpt}
              style={{
                width: '100%',
                height:'100%'
              }}
            />
        </div>

				<div className="centrize full-width full-height">
					<div className="vertical-center">
            <Typist>
						<div className="title"><Typist.Delay ms={800} /><span>CREARTEM</span> <Typist.Delay ms={800} />WEB AGENCY</div>
            <Typist.Delay ms={500} />
						<div className="subtitle">
							<div className="typing-title">
								<h2><strong>A Student Web Agency at Toi Ohomai Institute of Technology </strong></h2>
							</div>
						</div>
          </Typist>
					</div>
				</div>
			</div>
      </Grid>
    );
  }
}

export default Home;
