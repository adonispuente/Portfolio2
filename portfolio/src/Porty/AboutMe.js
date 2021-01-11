import './AboutMe.css'

import newTW from '../Pictures/newTW.png'
import BW from '../Pictures/BW.svg'

export default function AboutMe (){
    return(
        <div class='AboutMeWrap' id='AboutMe'>
            <div class='AboutContainer' >
                <div class='box1'>
                    <div>
                        <h1>Who Am I?</h1>
                    </div>
                    <p class='Aboutp'>Welcome to my website, My name is Adonis Puente. I am a
                        Full Stack Developer who enjoys making ideas come to life.
                        I made this website using React.js and CSS. I'm always trying to
                        explore and figure out new technologies to push the limits of what
                        is possible. When im not coding im usually exercising, looking up vidoes of 
                        recipes I know im never going to make, hanging out with friends/family,
                        or playing some video games!
                        </p>

                </div>

                <div class='box2'>
                    <img class='sig'src={newTW}/>
                </div>
                
            </div>
        </div>
    )
}