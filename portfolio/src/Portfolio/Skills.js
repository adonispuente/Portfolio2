/* eslint-disable jsx-a11y/alt-text */
import html from '../Pictures/html.png'
import css from '../Pictures/css.png'
import bootstrap from '../Pictures/bootstrap.png'
import less from '../Pictures/less.png'
import react from '../Pictures/react.png'
import javascript from '../Pictures/javascript.png'
import java2 from '../Pictures/java2.png'
import postgresql from '../Pictures/postgresql.png'
import okta2 from '../Pictures/okta2.png'
import python from '../Pictures/python.png'
import heroku from '../Pictures/heroku.png'
import adobexd from '../Pictures/adobexd.svg'
import github from '../Pictures/github.png'
import SpringBoot from '../Pictures/Springboot.webp'



import './main.css'



export default function Skills(){
    return(
        <section class='skills' id='MySkills'>
                
            <div class='skills-text'>
            
                <h1>My Skills</h1>
                <p> My web developmet strengths are in CRUD applications using Spring Boot, Postgresql,
                    and React.js.The back-end server uses Spring Boot with Spring Web MVC for REST APIs and Spring Data JPA for interacting with PostgreSQL database. 
                </p>
                <p>
                    I am aware that this field constantly requires adaptation, and what works best with the project at hand.
                    I am constantly learning new technologies and look forward to learning new Stacks or languages!
                </p>
            </div>

            <div class='skills-container'>

            <h1 class='mobile'>Skills</h1>
                <div class ='skillsCard'>
                        <div class = 'skills-title'>
                            <h2>Frontend</h2>
                        </div>
                        <hr/>
                       
                        <div class='skills-content'>
                        <div class='skill-item'>
                                    <img src={react} alt='react logo'/>
                                    <h4>REACT</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={javascript} alt='Javascript logo' />
                                    <h4>JAVASCRIPT</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={html} alt='html logo'/>
                                    <h4>HTML5</h4>
                            </div>
                            
                            <div class='skill-item'>
                                    <img src={css} alt='CSS logo'/>
                                    <h4>CSS3</h4>
                            </div>
                            
                            <div class='skill-item'>
                                    <img src={bootstrap} alt='Bootstrap logo'/>
                                    <h4>BOOTSTRAP</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={less} alt='LESS logo'/>
                                    <h4>LESS</h4>
                            </div>

                        </div>

  

                </div>
                




               

                <div class ='skillsCard'>
                        <div class = 'skills-title'>
                            <h2>Backend</h2>
                        </div>
                        <hr/>
                       
                        <div class='skills-content'>
                        <div class='skill-item'>
                                    <img src={java2} alt='Java logo'/>
                                    <h4>JAVA</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={postgresql} alt='Postgresql Logo'/>
                                    <h4>POSTGRESQL</h4>
                            </div>
                            
                            
                            <div class='skill-item'>
                                    <img src={okta2} alt='okta Logo'/>
                                    <h4>OKTA</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={SpringBoot}/>
                                    <h4>Spring Boot</h4>
                            </div>
                           

                        </div>
                </div>

                <div class ='skillsCard'>
                        <div class = 'skills-title'>
                            <h2>Other</h2>
                        </div>
                        <hr/>
                       
                        <div class='skills-content'>
                        <div class='skill-item'>
                                    <img src={adobexd}/>
                                    <h4>ADOBE XD</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={heroku}/>
                                    <h4>HEROKU</h4>
                            </div>
                            <div class='skill-item'>
                                    <img src={github}/>
                                    <h4>GITHUB</h4>
                            </div>
                            
                            <div class='skill-item'>
                                    <img src={python}/>
                                    <h4>PYTHON</h4>
                            </div>
                           

                        </div>
                </div>
    
            </div>

        </section>
    )
}