import React from 'react';
import Fade from 'react-reveal/Fade';
import {Parallax} from 'react-parallax';
import Container from 'react-bootstrap/Container';

import './App.css';

//components
import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/titlemessage.components"
import About from "./pages/about/about.component"
import Skills from "./pages/skills/skills.component"
import Experience from "./pages/experience/experience.component"
import TimeLine from "./components/project-timeline/projecttimeline.component"
import ContactForm from "./pages/contact/contact.component"
import FooterPanel from "./components/footer/footer.component"


const App=()=> {
  return (
    <div className="App" style={{position:"relative"}}>
      <Mynavbar/>
      <MyCarousal></MyCarousal>
      <TitleMessage/>
      <div>
      <Parallax blur={10} bgImage="./assets/img/parallax/background.webp" bgImageAlt="Parallax Image" strength={200}>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
      <About/>
      </Fade>
      </Container>
      </Parallax>
      </div>
      <div>
     
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
      <Skills/>
      </Fade>
      </Container>
</div>
      <div>
     
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
      <Experience/>
      </Fade>
      </Container>
      
      </div>
      {/* <div>
     
        <Container className="container-box rounded">
          <Fade duration={500}>
      <TimeLine/>
      </Fade>
      </Container>
      
      </div>
      <div> */}
     
     <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
      <ContactForm/>
      </Fade>
      </Container>
      
      </div>
      <hr/>
      <FooterPanel/>

    </div>
  );
}

export default App;
