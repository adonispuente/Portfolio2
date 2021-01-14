import './Intro.css'
import labtop from '../Pictures/labtop.png'
import sig from '../Pictures/sig.png'
import zoom from '../Pictures/zoom.png'
import styled from 'styled-components';
import PDF from '../Pictures/PDF.pdf'

  


export default function Intro (){

    return(
        <div class='introflex'>
            <div class='grid'>
                <div>
                    <p class='introp name'>My Name is Adonis Puente</p>
                </div>

                <div class='typewriter'>
                    <h3 >I Am A Web Developer</h3>
                </div>

                <div>
                    <p class='introp'>"The future belongs to those who believe in the beauty of their dreams"</p>
                    <p class='introp'>- Eleanor Roosevelt</p>          
                </div>

               <div class='buttonFlex' >
                   <a href={PDF} target="_blank">
                        <button style={{background:'#00bfb2'}}>Resume</button>

                    </a>
                    <a href='#Contact'><button >Hire Me</button></a>
                    
               </div>
            </div>
            
            <div class='labtop'>
                <img class='testimg' alt='A labtop by Joshua Reddekopp' src={labtop}/>
            </div>


        </div>
    )
}