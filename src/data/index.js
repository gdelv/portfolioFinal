import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript, DiRuby, DiPostgresql } from "react-icons/di";

const expressLogo = require('../images/express.jpeg')
const xdLogo = require('../images/xdlogo.png')
const reactBootstrapLogo = require('../images/reactbootstrap.png')
const testPic = require('../images/test.jpg')

export const languages = [
    {
        name: 'HTML',
        logo: <FaHtml5 size={175} style={{color: '#e44d26'}}/>  
    },
    {
        name: 'CSS',
        logo: <FaCss3Alt size={175} style={{color: '#379ad6'}}/>
    },
    {
        name: 'JavaScript',
        logo: <DiJavascript size={175} style={{color: '#dfc12d'}}/>
    },
    {
        name: 'GitHub',
        logo: <FaGithub size={175}/>
    },
    {
        name: 'Node.js',
        logo: <FaNodeJs size={175} style={{color: '#7bb800'}}/>
    },
    {
        name: 'React.js',
        logo: <FaReact size={175} style={{color: '#02d2f8'}}/>
    },
    {
        name: 'Ruby',
        logo: <DiRuby size={175} style={{color: '#d31904'}}/>
    },
    {
        name: 'PostgreSQL',
        logo: <DiPostgresql size={175} style={{color: '#33638c'}}/>
    },
    {
        name: 'Express.js',
        logo: <img src={expressLogo} alt='express-logo'/>
    }, 
    {
        name: 'Adobe XD',
        logo: <img src={xdLogo} alt='adobeXD-logo' />
    },
    {
        name: 'React-Bootstrap',
        logo: <img src={reactBootstrapLogo} alt='react-bootstrap-logo'/>
    }
]

export const projects = [
    {
        title: "Green Energy",
        description: "My first website created using HTML, CSS, and JavaScript",
        img: testPic,
        webLink: "https://gdelv.github.io/fireWebsite",
        repoLink: "https://github.com/gdelv/fireWebsite",
        technologyUsed: [
            {
                name: 'HTML',
                logo: <FaHtml5 size={50} style={{color: '#e44d26'}}/>
            },
            {
                name: 'CSS',
                logo: <FaCss3Alt size={50} style={{color: '#379ad6'}}/>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}}/>
            }
        ]
    },
    {
        title: "Prediction World",
        description: "My first website created using React",
        img: testPic,
        webLink: "https://www.predictionworld.surge.sh",
        repoLink: "https://github.com/gdelv/fantasyTALK",
        technologyUsed: [
            {
                name: 'HTML',
                logo: <FaHtml5 size={50} style={{color: '#e44d26'}}/>
            },
            {
                name: 'CSS',
                logo: <FaCss3Alt size={50} style={{color: '#379ad6'}} />
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}} />
            },
            {
                name: 'React',
                logo: <FaReact size={50} style={{color: '#02d2f8'}}/>
            }
        ]
    }
]