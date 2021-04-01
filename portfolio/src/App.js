

import NavBar from './Portfolio/NavBar'
import './App.css'
import Intro from './Portfolio/Intro'
import Featured from './Portfolio/Featured'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Contact from './Portfolio/Contact'
import AboutMe from './Portfolio/AboutMe'
import RevampIntro from './Portfolio/RevampIntro'
import MotionBG from './Portfolio/MotionBG'

function App() {

 
  return (
    <div className="App">
      <div class='Navflex'>
      <NavBar/>
      <RevampIntro/>
      </div>
      
      <Intro/>
      <Featured/>
      <Skills/>
      <Projects/>
      <Contact/>
      <AboutMe/>
      {/* <MotionBG/> */}
      

    </div>
  );
}

export default App;
