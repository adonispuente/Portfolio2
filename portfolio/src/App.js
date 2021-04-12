

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
      {/* <svg class='scroll' width="40" height="77" viewBox="0 0 53 110">
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
                    </svg> */}

          <svg class='scroll arrow' xmlns="http://www.w3.org/2000/svg" width="53.316" height="53.316" viewBox="0 0 53.316 53.316">
            <g id="Icon_ionic-ios-arrow-dropdown" data-name="Icon ionic-ios-arrow-dropdown" transform="translate(-3.375 -3.375)">
              <path id="Path_31" data-name="Path 31" d="M10.7,15.145a2.483,2.483,0,0,0,0,3.5L22.969,30.871a2.471,2.471,0,0,0,3.409.077L38.464,18.9a2.47,2.47,0,1,0-3.486-3.5L24.6,25.629,14.2,15.133A2.471,2.471,0,0,0,10.7,15.145Z" transform="translate(5.436 9.082)"/>
              <path id="Path_32" data-name="Path 32" d="M3.375,30.033A26.658,26.658,0,1,0,30.033,3.375,26.654,26.654,0,0,0,3.375,30.033Zm42.6-15.943A22.547,22.547,0,1,1,14.089,45.976,22.547,22.547,0,1,1,45.976,14.089Z" transform="translate(0 0)"/>
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
