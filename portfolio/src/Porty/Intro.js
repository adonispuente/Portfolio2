import './Intro.css'
import labtop from '../Pictures/labtop.png'
import sig from '../Pictures/sig.png'
import zoom from '../Pictures/zoom.png'
import styled from 'styled-components';

  


export default function Intro (){

    return(
        <div class='introflex'>
            <div class='grid'>
                <div>
                    <p class='introp'>My Name is Adonis Puente</p>
                </div>

                <div class='typewriter'>
                    <h3 >I Am A Web Developer</h3>
                </div>

                <div>
                    <p class='introp'>"The first step is you have to say that you can"</p>
                    <p class='introp'>- Will Smith</p>          
                </div>
            </div>
            
            <div style={{width:'45%'}}>
                <img class='testimg' alt='A labtop by Joshua Reddekopp' src={zoom}/>
            </div>


        </div>
    )
}