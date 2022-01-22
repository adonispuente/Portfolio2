import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'

import PDF from '../Pictures/Resume.pdf'









export default function Navbar(){


    
return(
    <div class='nav-container'>
        <header>
            <a class='logo'> Adonis Puente</a>
            
            <div class ='nav'>
                <ul>

                <li>

                    <a href='#AboutMe' class ='bubble'> 
                    <FontAwesomeIcon  icon={faStreetView}  size="2x"color="white" id='icon' > About Me</FontAwesomeIcon>
                    <span class="icon_title">About Me</span>
                    </a>
                    </li>
                    <li>

                        <a href='#MySkills' class ='bubble'>
                        <FontAwesomeIcon icon={faCode}  size="2x"color="white" id='icon' >GitHub</FontAwesomeIcon>
                        <span class="icon_title">Skills</span>
                        </a>
                    </li>
                    <li>

                        <a href='#MyWork' class ='bubble'>
                        <FontAwesomeIcon icon={faBriefcase}  size="2x"color="white" id='icon'>Projects</FontAwesomeIcon>
                        <span class="icon_title">Projects</span>
                        </a>
                    </li>
                    
                    {/* <li>
                        <a href='#'>About Me</a>
                    </li> */}
                    <li>

                        <a href='#ContactMe'class ='bubble' > 
                        <FontAwesomeIcon  icon={faPaperPlane}  size="2x"color="white" id='icon' ></FontAwesomeIcon>
                        <span class="icon_title">Contact</span>
                        </a>
                    </li>
                    
                </ul>
            </div>

            
        </header>
        <div class ='social-header'>
                    <ul>
                        <li>
                            <a href="https://github.com/adonispuente" target="_blank" class='bubble'> 
                            <FontAwesomeIcon icon={faGithub}  size="2x"color="white" id='icon' >GitHub</FontAwesomeIcon>
                            <span class="icon_title">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/adonis-puente/' target="_blank"  class='bubble'>
                              <FontAwesomeIcon icon={faLinkedin} size="2x" color='white' id='icon' > Linkedin</FontAwesomeIcon> 
                              <span class="icon_title">Linkedin</span>
                            </a>
                        </li>
                        <li>
                            <a href={PDF} target="_blank" class='bubble' >
                              <FontAwesomeIcon icon={faFile} size="2x" color='white' id='icon' > </FontAwesomeIcon> 
                              <span class="icon_title">Resume</span>
                            </a>
                        </li>
                    </ul>
            </div>
    
    
    
    
    </div>
)

};