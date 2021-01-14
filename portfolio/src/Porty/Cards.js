import './Cards.css'
// import frontend from '../Pictures/frontend.png'
import ss6 from '../Pictures/ss6.png'
import backend from '../Pictures/backend.png'
import frontend from '../Pictures/frontend.jpg'







export default function Cards (){

    return(
        <div id='Skills'class='CardWrap'>
            <div class='param'>
                        <div>
                            <img class ='frontend' src={frontend}/>
                        </div>
                    <h3 class='Cardh3'>Front End</h3>
                    
                        <p class='Cardli'>STYLED COMPONENTS</p>
                        <p class='Cardli'>HTML/CSS/LESS</p>
                        <p class='Cardli'>CONTEXT API</p>
                        <p class='Cardli'>JAVASCRIPT</p>
                        <p class='Cardli'>BOOTSTRAP</p>
                        <p class='Cardli'>REACT</p>
                        <p class='Cardli'>REDUX</p>
                        
                        
                    
            </div>
            <div class='param'>
                        <div>
                            <img class ='backend' src={backend}/>
                        </div>
                    <h3 class='Cardh3'>Back End</h3>
                   
                    <p class='Cardli'>POSTGRESQL</p>
                        <p class='Cardli'>POSTMAN</p>
                        <p class='Cardli'>JACKSON</p>
                        <p class='Cardli'>SPRING</p>
                        <p class='Cardli'>OKTA</p>
                        <p class='Cardli'>JAVA</p>
                        
                        
                        
                        
                        
                        
                        
                        
                    
            </div>
            
            
        </div>
    )
}