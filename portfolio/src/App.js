

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
      <div class='motion'>
      <svg class='scroll' width="40" height="77" viewBox="0 0 53 110">
                            <g id="scroll" transform="translate(-274 -567)">
                                <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(274 567)" fill="none" stroke="#000" stroke-width="6">
                                <rect width="53" height="110" rx="26.5" stroke="none"/>
                                <rect x="3" y="3" width="47" height="104" rx="23.5" fill="none"/>
                            </g>
                            <g class='circle' id="Ellipse_1" data-name="Ellipse 1" transform="translate(286 581)" fill="#000" stroke="#707070" stroke-width="1">
                                <ellipse cx="14.5" cy="15" rx="14.5" ry="15" stroke="none"/>
                                <ellipse cx="14.5" cy="15" rx="14" ry="14.5" fill="none"/>
                            </g>
                            </g>
                    </svg>
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
