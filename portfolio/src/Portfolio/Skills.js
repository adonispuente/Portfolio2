import brain from '../Pictures/brain.svg'
import frontend from '../Pictures/frontend.svg'
import backend from '../Pictures/backend.svg'
import './main.css'



export default function Skills(){
    return(
        <section class='skills' id='MySkills'>
            <div class='skills-container'>
                <ul>
                    {/* <li class='transition2'>
                        <div class='icon-container one'>
                            <img src={brain}></img>
                        </div>
                            <p class='skill-title'>Learning </p>
                            <ul class='listed'>
                                <li>Adobe Xd</li>
                                <li>Node.js</li>
                                <li>PhotoShop</li>
                            </ul>
                            
                        
                    </li> */}
                    <li class='transition2'>
                        <div class='icon-container two'>
                            <img src={frontend}></img>
                        </div>
                            <p class='skill-title'>Frontend Development</p>
                            <ul class='listed'>
                                <li>React | JavaScript</li>
                                <li>ContextAPI | Redux </li>
                                <li>HTML/CSS | SCSS | LESS</li>
                                <li>BootStrap | MaterialUi</li>
                                <li>Rest API's</li>
                            </ul>
                            {/* <p class='featured-desc skill-desc'> React | Redux | JavaScript | ContextAPI </p>
                            <p class='featured-desc skill-desc'> HTML | CSS | SASS | LESS</p>
                            <p class='featured-desc skill-desc'> BootStrap | MaterialUi | REST API </p> */}



                        
                    </li>
                    <li class='transition2'>
                        <div class='icon-container three'>
                            <img src={backend}></img>
                        </div>
                            <p class='skill-title'>Backend Development</p>
                            <ul class='listed'>
                                <li>Postgresql | Jackson</li>
                                <li>Tomcat | Spring</li>
                                <li>Postman</li>
                                <li>Okta</li>
                                <li>Java</li>
                                
                            </ul>
                            {/* <p class='featured-desc skill-desc'> POSTGRESQL | POSTMAN | JACKSON </p>
                            <p class='featured-desc skill-desc'> SPRING | OKTA | JAVA </p> */}

                        
                    </li>
                </ul>

            </div>

        </section>
    )
}