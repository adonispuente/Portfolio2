import emailjs  from 'emailjs-com';
import React, { useState } from "react";
import './ContactMe.css'
import styled from "styled-components";
import hexa from '../Pictures/hexa.png'
import dark from '../Pictures/dark.png'



const Background = styled.section`
  background-attachment: fixed;
  background-image: url(${dark});
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

export default function ContactMe (){

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
        <Background class='contactBG '>

        <div id='Contact' class='ContactForm'>
                <h1 class='contactH1'>Contact Me!</h1>

                <form >
                    <div class='partA'>
                        <input
                            name='Name'
                            onChange={Changing}
                            value={form.Name}
                            placeholder='Name'
                            />
                        <input
                            name='Email'
                            onChange={Changing}
                            value={form.Email}
                            placeholder='Email'
                            />
                    </div>
                    
                    <div class='partB'>

                        <textarea
                            
                            name="Message"
                            onChange={Changing}
                            placeholder="Write an email to me here!"
                            
                            value={form.Message}
                            style={{height: '200px'}}
                        />
                   
                   <button   onClick={Submit} > Send Email! </button>
                    </div>
                    
                </form>


                        
                
        </div>
        </Background>
            )
        }