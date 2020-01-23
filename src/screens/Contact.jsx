import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait } from "react-icons/io";

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
            
            <div className='form-container'>
                <form name="contact" action="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            </div>
            
        </div>
    )
}

export default Contact