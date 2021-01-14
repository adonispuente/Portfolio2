import emailjs  from 'emailjs-com';
import React, { useState } from "react";
import './ContactMe.css'
import styled from "styled-components";
import hexa from '../Pictures/hexa.png'
import dark from '../Pictures/dark.png'
import Email from '../Pictures/Email.png'




const Background = styled.section`
  /* background-attachment: fixed;
  background-image: url(${dark});
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden; */
  width: 100%;
  background:#fbfbfb;
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
        <div class='emailPic'>
            <img src={Email}/>
        </div>
                
            <div class='formWidth'>

                
                <form >
                <p class='contactH1'>Contact Me!</p>
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
                            placeholder="EMAIL CONTENT"
                            
                            value={form.Message}
                            style={{height: '200px'}}
                        />
                   
                   <button style={{background:'#00bfb2'}} onClick={Submit} > Send Email! </button>
                    </div>
                    
                </form>

            </div>
                        
                
        </div>
        </Background>
            )
        }