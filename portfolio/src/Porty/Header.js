import NavBar from './NavBar'
import Intro from './Intro'
import './Header.css'
import AboutMe from './AboutMe'
import Cards from './Cards'
import styled from "styled-components";
import pattern from '../Pictures/pattern.png'

const Background = styled.section`
  background-attachment: fixed;
  background-image: url(${pattern});
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

export default function Header(){

    return(
        <Background >
            <div class='header'>
                <NavBar/>
                <Intro/>
                <AboutMe class='Layer'/>
            </div>
            <div class='Layer overlap '>
            <Cards />
            </div>
            
               
            

        </Background>
    )
}