import React from "react"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';



export default function NavBar(){

    return(
        <div style={{background:" #fff"}}>
        <title>Adonis Puente's Portfolio</title>
        <section class ='flex NavBar'>
                <div>
                    <h3>Adonis Puente</h3>
                </div>
                
               

                <div class='navWidth'>
                    <ul class='flex '>
                        <li>Resume</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div class ='flex' style={{width:'7%'}}>
                    <a href="https://www.linkedin.com/in/adonis-puente/ ">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color='#2867B2' > Linkedin</FontAwesomeIcon>
                    </a>
                    <a href="https://github.com/adonispuente">
                    <FontAwesomeIcon icon={faGithub} size="2x" >GitHub</FontAwesomeIcon>
                    </a>               
                </div>
        </section>    
        </div>
    )
}