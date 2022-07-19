/* eslint-disable react/jsx-no-target-blank */
import labtop2 from '../Pictures/labtop2.png'
import WJ from '../Pictures/WJ.png'
import './main.css'


export default function Projects(){
    return(
        <section class='portfolio' >
            
                <div class ='portfolio-container transition3'>
                    <div>

                    </div>
                    <div class='portfolio-left'>
                        <div class='inner'>
                            <p class ='subtitle'>Citrics Backend</p>
                            <p class='featured-title'><a href='https://github.com/adonispuente/citrics-be-a ' target="_blank">Github Link</a></p>
                            <p class='featured-disc'>A Java backend for the citrics application. An application that allows users to compare certain variables of different cities</p>
                        </div>
                

                    </div>
                    <a href='https://github.com/adonispuente/citrics-be-a ' target="_blank"><img src={labtop2} alt ='game of life'/> </a>

                </div>

                <div class ='portfolio-container transition3'>
                <div>
                        
                </div>
                    <div class='portfolio-left'>
                        <div class='inner'>
                            <p class ='subtitle'>Weight Journey App</p>
                            <p class='featured-title'><a href='https://getittogether.netlify.app/' target="_blank">Get it Together!</a></p>
                            <p class='featured-disc'>Single-page app that allows user to input individual information to get caloric intake numbers that meet their weight goals Demonstrated state and form management along with form validation

                                </p>
                        </div>

                    </div>
                    <a href='https://getittogether.netlify.app/' target="_blank"> <img src={WJ} alt ='game of life'/> </a>

                </div>


                <div class ='portfolio-container transition3'>
                <div>
                        
                </div>
                    <div class='portfolio-left'>
                        <div class='inner'>
                            <p class ='subtitle'>Water My Plants Backend </p>
                            <p class='featured-title'><a href='https://github.com/adonispuente/Java_Back_End' target="_blank">GitHub Link</a></p>
                            <p class='featured-disc'>A Java BackEnd that allows for multiple users to input their plants species and input how often they want to water said plant. BackEnd endpoints require authorization via generated token

                            </p>
                        </div>

                    </div>
                    <a href='https://github.com/adonispuente/Java_Back_End' target="_blank"><img src={labtop2} alt ='game of life'/> </a>

                </div>

                
        </section>
    )
}