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