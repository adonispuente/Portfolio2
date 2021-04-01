
import styled from 'styled-components'
// import './NavBar.css'
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'









export default function Navbar(){


    
return(
    <div class='nav-container'>
        <header>
            <a class='logo' href='#href'> Adonis Puente</a>
        
            <div class ='nav'>
                <ul>
                    <li>

                        <a href='#MyWork' >
                        <FontAwesomeIcon icon={faBriefcase}  size="2x"color="white" id='icon'>Projects</FontAwesomeIcon>
                        </a>
                    </li>
                    <li>

                        <a href='#MySkills' >
                        <FontAwesomeIcon icon={faCode}  size="2x"color="white" id='icon' >GitHub</FontAwesomeIcon>

                        </a>
                    </li>
                    {/* <li>
                        <a href='#'>About Me</a>
                    </li> */}
                    <li>

                        <a href='#ContactMe' > 
                        <FontAwesomeIcon  icon={faPaperPlane}  size="2x"color="white" id='icon' >GitHub</FontAwesomeIcon>

                        </a>
                    </li>
                </ul>
            </div>

            
        </header>
        <div class ='social-header'>
                    <ul>
                        <li>
                            <a href="https://github.com/adonispuente" target="_blank"> 
                            <FontAwesomeIcon icon={faGithub}  size="2x"color="white" id='icon' >GitHub</FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/adonis-puente/' target="_blank" >
                              <FontAwesomeIcon icon={faLinkedin} size="2x" color='white' id='icon' > Linkedin</FontAwesomeIcon> 

                            </a>
                        </li>
                    </ul>
            </div>
    
    
    
    
    </div>
)

};