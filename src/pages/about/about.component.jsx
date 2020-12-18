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
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I am <strong>&nbsp;Virat Sagar</strong>
                  <br />A passionate programmer and a Coach. I am a Full Stack Web Developer with React.js, Redux as my tech stack.
                  <br />
                  A Computer Science and Engineering B.Tech.
                  <br />
                  Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                  <br />
                  Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
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