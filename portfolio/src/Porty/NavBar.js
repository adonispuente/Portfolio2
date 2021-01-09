import React from "react"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'



export default function NavBar(){

    return(
        <div style={{background:" #000"}}>
        <title>Adonis Puente's Portfolio</title>
        <section class ='flex NavBar'>
                <div>
                    <h3 class='h3'>AP</h3>
                </div>
                
               

                <div class='navWidth'>
                    <ul class='flex '>
                        <li class='li'>Resume</li>
                        <li class='li'>About</li>
                        <li class='li'>Skills</li>
                        <li class='li'>Projects</li>
                        <li class='li'>Contact</li>
                    </ul>
                </div>

                <div class ='flex' style={{width:'9%'}}>
                    <a href="https://www.linkedin.com/in/adonis-puente/ ">
                        <img class='navpic'src ="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Linkedin-256.png"/>
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