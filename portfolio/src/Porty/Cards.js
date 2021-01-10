import './Cards.css'
import frontend from '../Pictures/frontend.png'
import ss1 from '../Pictures/ss1.png'
import ss2 from '../Pictures/ss2.png'
import ss3 from '../Pictures/ss3.png'
import ss4 from '../Pictures/ss4.png'
import ss5 from '../Pictures/ss5.png'
import ss6 from '../Pictures/ss6.png'





export default function Cards (){

    return(
        <div class='CardWrap'>
            <div class='param'>
                        <div>
                            <img class ='frontend' src={frontend}/>
                        </div>
                    <h3 class='Cardh3'>Front End</h3>
                    <ul>
                        <li class='Cardli'>HTML/CSS/LESS</li>
                        <li class='Cardli'>REACT</li>
                        <li class='Cardli'>BOOTSTRAP</li>
                        <li class='Cardli'>JAVASCRIPT</li>
                        <li class='Cardli'>REDUX</li>
                        <li class='Cardli'>CONTEXT API</li>
                        <li class='Cardli'>STYLED COMPONENTS</li>
                    </ul>
            </div>
            <div class='param'>
                        <div>
                            <img class ='frontend' src={ss6}/>
                        </div>
                    <h3 class='Cardh3'>Back End</h3>
                    <ul>
                        <li class='Cardli'>JAVA</li>
                        <li class='Cardli'>POSTGRESQL</li>
                        <li class='Cardli'>POSTMAN</li>
                        <li class='Cardli'>JACKSON</li>
                        <li class='Cardli'>OKTA</li>
                        <li class='Cardli'>SPRING</li>
                        
                        
                    </ul>
            </div>
            
            
        </div>
    )
}