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
                            <a>GitHub Link</a>
                            <h4>Tech Stack</h4>
                            <p class='projectP'>REACT | REDUX | JAVASCRIPT</p>
                        
                            
                        
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


        <hr></hr>


        <div class='projectFlex'>

                    <div class='box4'>
                            <img src={GameOfLife}/>
                        <div class='buttonFlex' >
                            <a  target="_blank">
                                <button style={{background:'#00bfb2'}}>website</button>
                            </a>
                                
                        </div>
                    </div>
                    <div class='box3' >
                            <h2>Weight Journey</h2>
                            <p class='projectP'>
                            Single-page app that allows user to input individual information to get
                             caloric intake numbers that meet their weight goals
                            Demonstrated state and form management along with form validation</p>
                            <h4>Date:</h4>
                            <p class='projectP'>December 2020</p>
                            <h4>GitHub</h4>
                            <a>GitHub Link</a>
                            <h4>Tech Stack</h4>
                            <p class='projectP'>REACT | REDUX | JAVASCRIPT</p>
                        
                            
                        
                    </div> 
                    
            </div> 

        </div>
    )
}