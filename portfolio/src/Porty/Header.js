import NavBar from './NavBar'
import Intro from './Intro'
import './Header.css'
import AboutMe from './AboutMe'
import Cards from './Cards'
import pattern from '../Pictures/pattern.png'
import Projects from './Projects'
import ContactMe from './ContactMe'
import hex from '../Pictures/hex.jpg'
import styled from "styled-components";


const Background = styled.section`
  background-attachment: fixed;
  background-image: url(${hex});
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

export default function Header(){

    return(
        <div>
        <Background >
            <div class='header'>
                <NavBar/>
                <Intro/>
                <div style={{width:'100%', background:'#00bfb2', paddingBottom:'padding-top: 100px'}}>
            <AboutMe/>
            </div>
            </div>
            
           
           
            
            <Cards />
            
            <Projects/>
            
            
               
            

        </Background>
        <ContactMe/>
        </div>
    )
}