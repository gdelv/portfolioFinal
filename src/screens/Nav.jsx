import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const profilePic = require('../images/profile-pic.jpg')

class Nav extends React.Component {
    state = {
        modal: false
    }
    render() {
        return (
            <nav>
                <div className='profile-pic-container'>
                    <img src={profilePic} alt='profile-pic'/>
                </div>

                <h1 className='name'>Giusseppe <br></br>
                    Del Vecchio
                </h1>
                <h3>Full Stack Developer</h3>

                <a className='email' href='mailto:giudelvecchio@gmail.com?subject=Hello%20there%20
                &amp;body=Would%20love%20to%20get%20to%20know%20more%20about%20you!'> <AiOutlineMail /> giudelvecchio@gmail.com</a>

                <div className='nav-links-container'>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>

                <div className='social-media-links'>
                    <a href='https://www.linkedin.com/in/giusseppe-del-vecchio/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={40} style={{color: 'black'}}/>
                    </a>

                    <a href='https://github.com/gdelv'>
                        <FaGithub size={40} style={{color: 'black'}}/>
                    </a>
                </div>
                {/* include button to view more? */}
                <div className='scroll'>
                    <a href="#about"><span></span>Scroll</a>
                </div>
                
            </nav>
        )
    }

}

export default Nav