
import MotionBG from './MotionBG'


export default function RevampIntro(){
    return(
        <div class='Wrap'>
            <div class='box'>
            <MotionBG/>
            </div>
            <div class ='box overlay '>
                    <h1><span class="text_1">Hey there, im Adonis!</span>
                        <span class="text_2">Im a Software Engineer!</span>
                    </h1>

                    

                    {/* <svg class='scroll' width="40" height="77" viewBox="0 0 53 110">
                            <g id="scroll" transform="translate(-274 -567)">
                                <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(274 567)" fill="none" stroke="#000" stroke-width="6">
                                <rect width="53" height="110" rx="26.5" stroke="none"/>
                                <rect x="3" y="3" width="47" height="104" rx="23.5" fill="none"/>
                            </g>
                            <g class='circle' id="Ellipse_1" data-name="Ellipse 1" transform="translate(286 581)" fill="#000" stroke="#707070" stroke-width="1">
                                <ellipse cx="14.5" cy="15" rx="14.5" ry="15" stroke="none"/>
                                <ellipse cx="14.5" cy="15" rx="14" ry="14.5" fill="none"/>
                            </g>
                            </g>
                    </svg> */}
                    <a href='#ContactMe' > 
                    <button  > Contact Me </button>
                    </a>
            </div>

            
            
            
            

        </div>
    )
}