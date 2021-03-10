import emailjs  from 'emailjs-com';
import React, { useState } from "react";
import './main.css'


export default function Contact(){


    const initialForm= {
        Name:'',
        Email:'',
        Message:''
    }

    const [form,setForm]= useState(initialForm)


    const Changing = (event)=>{
        // console.log(event.target)
        const name = event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const Submit = (event)=>{
        const templateId = 'template_9mwiejp';
        // sendFeedback(templateId,{message_html:form.Message})
        emailjs.send('service_o4pr1cj',templateId, form , 'user_oHx1PQWUGY4N5JixTPoth')
        .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
       console.log('FAILED...', err);
                });
        }
   

    return(
        
            <div id='ContactMe' class='ContactForm'>
                        
                <svg class='hero-design-bottom' width="662" height="624" viewBox="0 0 662 624">
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
                
            

                
                            <form >
                                <h1 class='contactH1'>Like what you see? <span> Hire me!</span></h1>
                                    <div class='partA'>
                                        <p class='contactP'>Name:</p>
                                        <input
                                            name='Name'
                                            onChange={Changing}
                                            value={form.Name}
                                            placeholder='NAME'
                                            />
                                            <p class='contactP'>Email:</p>
                                        <input
                                            name='Email'
                                            onChange={Changing}
                                            value={form.Email}
                                            placeholder='EMAIL'
                                            />
                                    </div>
                                    
                                    <div class='partB'>
                                        <p class='contactP'>Message:</p>
                                        <textarea
                                            
                                            name="Message"
                                            onChange={Changing}
                                            placeholder="MESSAGE :P"
                                            value={form.Message}
                                            style={{height: '200px'}}
                                        />
                                
                                    </div>
                                    <button  onClick={Submit} > Send Email! </button>

                        
                            </form>

               
                        
                
        </div>
        
    )
}