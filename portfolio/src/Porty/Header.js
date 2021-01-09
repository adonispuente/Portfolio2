import NavBar from './NavBar'
import Intro from './Intro'
import './Header.css'
import AboutMe from './AboutMe'
import Cards from './Cards'

export default function Header(){

    return(
        <div>
            <div class='header'>
                <NavBar/>
                <Intro/>
                <AboutMe class='Layer'/>
            </div>
            <div class='Layer overlap'>
            <Cards />
            </div>
            
               
            

        </div>
    )
}