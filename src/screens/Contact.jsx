import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait } from "react-icons/io";
import ContactForm from '../form/ContactForm';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2 className='contact-title' id='contact'>LETS CHAT!</h2>
            <div className='contact-cell'>
               <IoIosPhonePortrait/>
                <p> (516) 864-3657</p> 
            </div>
            
            <div className='contact-email'>
                <AiOutlineMail/>
                <p> giudelvecchio@gmail.com</p>
            </div>
            
            <ContactForm/>
            
        </div>
    )
}

export default Contact