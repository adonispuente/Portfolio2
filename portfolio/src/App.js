

import NavBar from './Portfolio/NavBar'
import './App.css'
import Intro from './Portfolio/Intro'
import Featured from './Portfolio/Featured'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Contact from './Portfolio/Contact'
import RevampIntro from './Portfolio/RevampIntro'

function App() {

 
  return (
    <div className="App">
      <div class='Navflex'>
      <NavBar/>
      <RevampIntro/>
      </div>
      
      <Intro/>
       <Skills/>
       <Featured/> 
       <hr/>
     
       <Projects/>
      <Contact/>  
      
      

    </div>
  );
}

export default App;
