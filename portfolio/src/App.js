

import NavBar from './Portfolio/NavBar'
import './App.css'
import Intro from './Portfolio/Intro'
import Featured from './Portfolio/Featured'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Contact from './Portfolio/Contact'
import AboutMe from './Portfolio/AboutMe'
// import ContactMe from './Porty/ContactMe'

function App() {

 
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Featured/>
      <Skills/>
      <Projects/>
      <Contact/>
      <AboutMe/>
      

    </div>
  );
}

export default App;
