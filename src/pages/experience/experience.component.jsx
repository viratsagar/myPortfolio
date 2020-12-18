import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              {/* <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header> */}
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Roles</Card.Title>
                  <hr></hr>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Integration Consultant &amp; Data Scientist </strong>
                    <br />
                    
                    <strong>Experience:</strong> 6 Years
                    <br/>
                    <strong> Orgainizations </strong>
                    <hr></hr>
                    <ul className="text-left">
                      <li><strong>Software AG</strong> Consultant (September 2020 - Present)</li>
                      <li><strong>iNeuron.ai</strong> Senior Data Scientist (November 2019 - September 2020)</li>
                      <li><strong>Lowe's</strong> Software Engineer (August 2019 - November 2019)</li>
                      <li><strong>Cognizant Technology Solutions</strong> Programmer Analyst (January 2015 - June 2017)</li>
                      
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;