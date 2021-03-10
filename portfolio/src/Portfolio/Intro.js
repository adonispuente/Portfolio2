// import './Intro.css'
import './main.css'
import {gsap,ScrollTrigger,Power4,Back} from "gsap/all";
import { useRef, useEffect } from "react";
import Adonis3 from '../Pictures/Adonis3.png'

export default function Intro(){



  gsap.registerPlugin(ScrollTrigger);
  var tl =gsap.timeline(); 

 useEffect(()=>{

    tl.from('.content',{
        y:'-30%',
        opacity:0,
        duration:2,
        ease:Power4.easeOut
    })

    tl.from('.stagger1',{
        opacity:0,
        y:-50,
        stagger:.3,
        ease:Power4.easeOut,
        duration:2,
    },"-=1.5")

    tl.from('.hero-design',{
        opacity:0,
        y:50,
        ease: Power4.easeOut,
        duration:1,

    },'-=2')

    gsap.from('.square-anim',{
        stagger:.2,
        scale:0.1,
        duration:1,
        ease: Back.easeOut.config(1.7)
    })

    gsap.from('.transition2',{
        scrollTrigger:{
            trigger:'.transition2',
            start: 'top bottom'
        },
        y:50,
        opacity:0,
        duration:1.2,
        stagger: .3
    })
    gsap.from('.transition3',{
        scrollTrigger:{
            trigger:'.transition3',
            start: 'top center'
        },
        y:50,
        opacity:0,
        duration:1.2,
        stagger: .6
    })

 },[])



    return(
        <div class='hero'>
            <div class='content'>
                    <h1 class='stagger1' >Weclome to my Portfolio!</h1>
                    {/* <img class='stagger1' src={Adonis3}/> */}
                    <div class='meet stagger1'>
                    <span >👇</span>
                    <p>Meet Adonis Puente</p>
                    </div>
                    <svg class='scroll' width="40" height="77" viewBox="0 0 53 110">
                        <g id="scroll" transform="translate(-274 -567)">
                            <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(274 567)" fill="none" stroke="#fff" stroke-width="6">
                            <rect width="53" height="110" rx="26.5" stroke="none"/>
                            <rect x="3" y="3" width="47" height="104" rx="23.5" fill="none"/>
                        </g>
                        <g class='circle' id="Ellipse_1" data-name="Ellipse 1" transform="translate(286 581)" fill="#fff" stroke="#707070" stroke-width="1">
                            <ellipse cx="14.5" cy="15" rx="14.5" ry="15" stroke="none"/>
                            <ellipse cx="14.5" cy="15" rx="14" ry="14.5" fill="none"/>
                        </g>
                        </g>
                    </svg>
            </div>

            <svg class='hero-design' width="662" height="624" viewBox="0 0 662 624">
                <g id="blockdesign" data-name="Group 2" transform="translate(-1014 -273)">
                    <rect class='square-anim'id="Rectangle_4" data-name="Rectangle 4" width="172" height="156" rx="20" transform="translate(1343 273)" fill="#6e00ff"/>
                    <rect class='square-anim'id="Rectangle_5" data-name="Rectangle 5" width="168" height="156" rx="20" transform="translate(1182 429)" fill="#fff"/>
                    <ellipse class='square-anim'id="Ellipse_2" data-name="Ellipse 2" cx="79" cy="78" rx="79" ry="78" transform="translate(1350 429)" fill="#ff64cb"/>
                    <rect class='square-anim'id="Rectangle_8" data-name="Rectangle 8" width="168" height="156" rx="20" transform="translate(1182 741)" fill="#fff"/>
                    <path class='square-anim'id="Path_4" data-name="Path 4" d="M20,0H148a20,20,0,0,1,20,20V136a20,20,0,0,1-20,20H20A20,20,0,0,1,0,136V20A20,20,0,0,1,20,0Z" transform="translate(1014 585)" fill="#8a3bf2"/>
                    <path class='square-anim'id="Path_2" data-name="Path 2" d="M20,0H148a20,20,0,0,1,20,20V136a20,20,0,0,1-20,20H20A20,20,0,0,1,0,136V20A20,20,0,0,1,20,0Z" transform="translate(1508 429)" fill="#6e00ff" opacity="0.402"/>
                    <path class='square-anim'id="Path_3" data-name="Path 3" d="M79,0c43.63,0,79,34.922,79,78s-35.37,78-79,78S0,121.078,0,78,35.37,0,79,0Z" transform="translate(1182 585)" fill="#00f7ff"/>
                    <rect class='square-anim'id="Rectangle_10" data-name="Rectangle 10" width="168" height="156" rx="20" transform="translate(1340 585)" fill="#6e00ff"/>
                </g>
            </svg>
        </div>
    )
}