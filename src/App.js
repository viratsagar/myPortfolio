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
      <About/>
      </Fade>
      </Container>
      </Parallax>
      </div>
      <div>
     
        <Container className="container-box rounded">
          <Fade duration={500}>
      <Skills/>
      </Fade>
      </Container>
      
      </div>
    </div>
  );
}

export default App;
