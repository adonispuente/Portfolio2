/* eslint-disable jsx-a11y/alt-text */
// import './Intro.css'
import './main.css'
import {gsap,ScrollTrigger,Power4,Back} from "gsap/all";
import { useEffect } from "react";
import Adonis from '../Pictures/blacktransparentlogo.png'

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

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])



    return(
        <div class='hero' id='AboutMe'>
            {/* <div class='content'> */}
                    {/* <h1 class='stagger1' >About ol' Adonis</h1> */}
                    {/* <img class='stagger1' src={Adonis}/>
            </div> */}
            	<div class="tilt-box-wrap">
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<span class="t_over"></span>
		<div class="tilt-box">
         <img class='stagger1' src={Adonis}/>
		</div>
	</div>
            <div>
                <p style={{color:'black'}}>
                I am a graduate of the Full Stack Development program at the Lambda School , now know as BloomTech. In combining a rigorous academic experience with professional roles
                 in the public and private sector, I have exemplified my keen ability to troubleshoot difficult information technology problems, collaborate on
                  teams, and utilize my business development skills at a professional level. I work primarily with Javascript.
                </p>
                <p  style={{color:'black'}}>
                    I graudated from FIU with a Bachelors in Psychology. I realized how much fun I had coding and went straight to
                 a coding bootcamp. From there I got my first job at a scooter company , Bolt Mobility, where I built the Admin Dashboard the company used to manage its fleets of scooters, manipulate geofences, and manage its customers. Here I also wrote some PHP backend, wrote extensive documentation , and reviewed code snippets.
                 Now I work at Red Hat where I work on the Interact Team managing various RHEL (Red Hat Enterprise Linux) applications on the front-end side of things!
                </p>
            </div>
        </div>
        



    )
}