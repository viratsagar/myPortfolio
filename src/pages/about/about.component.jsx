import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./about.style.css";

import Profile from '../../assets/img/profile/Profile.JPG'


const About = () => {
    return (
      <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details-b pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  <br /><strong>A passionate programmer and a story teller.
                  A Computer Science and Engineering B.Tech.
                  <br />
                  I have a track record of providing state of the art solutions to the customers by designing scalabale software applications with high availability.
               
                  <br />I love learning new technologies,and how they help in building a better tomorrow.
                  <br /></strong>
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/viratsagar" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/virat-sagar-90255b33/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  
  export default About;