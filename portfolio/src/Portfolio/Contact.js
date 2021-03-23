import emailjs  from 'emailjs-com';
import React, { useState,useEffect } from "react";
import './main.css'
import * as Yup from "yup";


export default function Contact(){


    const initialForm= {
        name:'',
        email:'',
        message:''
    }

      

    const [form,setForm]= useState(initialForm)
    const [submit,setSubmit] = useState(false)


   

    const Submit = (event)=>{
        event.preventDefault();
        setSubmit(true);
        setForm(initialForm)
        const templateId = 'template_9mwiejp';
        // sendFeedback(templateId,{message_html:form.Message})
        emailjs.send('service_o4pr1cj',templateId, form , 'user_oHx1PQWUGY4N5JixTPoth')
        .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
       console.log('FAILED...', err);
                });
        }
    // EVERYTHING TO DO WITH YUP VALIDATION ------------------------

    // State for the error messages
        const [errors, setErrors] = useState({
            name:'',
            email:'',
            message:''
        });
        
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const formSchema = Yup.object().shape({
        name: Yup
          .string()
          .required("Must include Name"),
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Email is Required"),
        message: Yup
          .string()
          .min(10, 'Message must be atleast 10 characters long!')
          .required("Must include a Message"),
      });

      useEffect(() => {
        /* We pass the entire state into the entire schema, no need to use reach here. 
        We want to make sure it is all valid before we allow a user to submit
        isValid comes from Yup directly */
        formSchema.isValid(form).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [form]);

      const validateChange = e => {
        Yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
              e.preventDefault();
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };
    
      const Changing = e => {
        e.persist();
        const newFormData = {
          ...form,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setForm(newFormData);
      };

      

    


    // EVERYTHING TO DO WITH YUP VALIDATION ------------------------

 
   

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
                
            

                
                            <form onSubmit={Submit}>
                                <h1 class='contactH1'>Like what you see? <span> Hire me!</span></h1>
                                {submit === true? (
                                                <div >
                                                    
                                                    <p class='Email'>Thank you, I will respond within 48 hours!</p>

                                                
                                                </div>


                                                ) : (
                                                    <div />
                                                )}
                                    <div class='partA'>
                                        <p class='contactP'>Name:</p>
                                        <input
                                            name='name'
                                            onChange={Changing}
                                            value={form.name}
                                            placeholder='NAME'
                                            />
                                            {errors.name.length > 0 ? (
                                                <p className="error">{errors.name}</p>
                                            ) : null}

                                            <p class='contactP'>Email:</p>
                                        <input
                                             name="email"
                                             type="email"
                                             placeholder='Email'
                                             onChange={Changing}
                                             value={form.email}
                                            />
                                 { errors.email.length > 0 && <p className="error">{errors.email}</p> }
                 
                                    </div>
                                    
                                    <div class='partB'>
                                        <p class='contactP'>Message:</p>
                                        <textarea
                                            
                                            name="message"
                                            onChange={Changing}
                                            placeholder="MESSAGE "
                                            value={form.message}
                                            style={{height: '200px'}}
                                        />
                                { errors.message.length > 5 && <p className="error">{errors.message}</p> }

                                
                                    </div>
                                    <button  type='submit' disabled={buttonDisabled} > Send Email! </button>

                        
                            </form>

                            {submit === true? (
                                                <div >
                                                    
                                                    <p class='Email'>Thank you, I will respond within 48 hours!</p>

                                                
                                                </div>


                                                ) : (
                                                    <div />
                                                )}


               
                        
                
        </div>
        
    )
}