import React from "react"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import PDF from '../Pictures/PDF.pdf'



export default function NavBar(){

    return(
        <div >
        <title>Adonis Puente's Portfolio</title>
        <section class ='flex NavBar'>
                <div>
                    <h3 class='h3' >AP</h3>
                </div>
                
               

                <div class='navWidth'>
                    <ul class='flex '>
                    <a target="_blank" href={PDF} >
                        <li class='li'>Resume</li>
                    </a>
                        <a href='#AboutMe'><li class='li'>About</li></a>
                        <a href='#Skills'><li class='li'>Skills</li></a>
                        <a href='#Projects'> <li class='li'>Projects</li> </a>
                        <li href='#Contact'class='li'>Contact</li>
                    </ul>
                </div>

                <div class ='flex' style={{width:'9%'}}>
                    <a href="https://www.linkedin.com/in/adonis-puente/ ">
                        <img class='navpic' alt='LinkedIn Logo' src ="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Linkedin-256.png"/>
                    {/* <FontAwesomeIcon icon={faLinkedinIn} size="2x" color='#2867B2' > Linkedin</FontAwesomeIcon> */}
                    </a>
                    <a href="https://github.com/adonispuente">
                    <FontAwesomeIcon icon={faGithub}  size="2x"color="white"  >GitHub</FontAwesomeIcon>
                    </a>               
                </div>
        </section>
        
        </div>
    )
}