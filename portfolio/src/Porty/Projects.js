import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fal} from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import WeightJ from '../Pictures/WeightJ.png'
import GameOfLife from '../Pictures/GameOfLife.jpg'


export default function Projects(){

    return(
        <div id='Projects'style={{width:'100%'}}>
                        <h1 class='Projecth1'>MY <span> PROJECTS</span> <FontAwesomeIcon icon={faCodeBranch} /> </h1>

            <div class='projectFlex'>

                    <div class='box3' >
                            <h2>Weight Journey</h2>
                            <p class='projectP'>
                            Single-page app that allows user to input individual information to get
                             caloric intake numbers that meet their weight goals
                            Demonstrated state and form management along with form validation</p>
                            <h4>Date:</h4>
                            <p class='projectP'>December 2020</p>
                            <h4>GitHub</h4>
                            
                            <a href='https://github.com/adonispuente/weight-journey' style={{color:'#00bfb2', textDecoration:'underline'}}>GitHub Link</a>
                            <h4>Tech Stack</h4>
                            <p class='projectP'>REACT | REDUX | JAVASCRIPT</p>
                            
                            <div class='imgcontainer'>
                                <img class='imgwithin' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png'/>
                                <img class='imgwithin' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png'/>
                                <img class='imgwithin2' src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'/>

                            </div>
                            
                        
                    </div> 
                    <div class='box4'>
                            <img src={WeightJ}/>
                        <div class='buttonFlex' >
                            <a href='https://getittogether.netlify.app/' target="_blank">
                                <button >website</button>
                            </a>
                                
                        </div>
                    </div>
            </div> 


       


        <div class='projectFlex'>

                    <div class='box4'>
                            <img src={GameOfLife}/>
                        <div class='buttonFlex' >
                            <a href='https://adonis-game-of-life.netlify.app/' target="_blank">
                                <button style={{background:'#00bfb2'}}>website</button>
                            </a>
                                
                        </div>
                    </div>
                    <div class='box3' >
                            <h2>Conways Game of Life</h2>
                            <p class='projectP'>
                            Single-page app that allows user to input individual information to get
                             caloric intake numbers that meet their weight goals
                            Demonstrated state and form management along with form validation</p>
                            <h4>Date:</h4>
                            <p class='projectP'>November 2020</p>
                            <h4>GitHub</h4>
                                <a target="_blank"  style={{color:'#ffa62b', textDecoration:'underline'}}  href='https://github.com/adonispuente/Game-of-life-Sprint/tree/master/game-of-life'>
                                GitHub Link
                                </a>
                                
                            
                            <h4>Tech Stack</h4>
                            <p class='projectP'>REACT | JAVASCRIPT</p>
                            <div class='imgcontainer'>
                                <img class='imgwithin' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png'/>
                                <img class='imgwithin' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png'/>

                            </div>
                            
                        
                    </div> 
                    
            </div> 

        </div>
    )
}