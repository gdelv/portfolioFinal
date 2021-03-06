import React from 'react'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript, DiRuby, DiPostgresql } from "react-icons/di";

const xdLogo = require('../images/xdlogo.png')
const recetaPic = require('../images/RecetaFinal.png')
const mealPrepPic = require('../images/mealPrep.png')
const groceryWorldPic = require('../images/groceryWorld.png')
const fusionGif = require('../images/fusion-gif.gif')
const jordanGif = require('../images/jordan-gif.gif')
const duckClick = require('../images/duckClick.png')

export const languages = [
    {
        name: 'JavaScript',
        logo: <DiJavascript size={90} style={{color: '#dfc12d'}}/>
    },
    {
        name: 'Node.js',
        logo: <FaNodeJs size={90} style={{color: '#7bb800'}}/>
    },
    {
        name: 'React.js',
        logo: <FaReact size={90} style={{color: '#02d2f8'}}/>
    },
    {
        name: 'React Native',
        logo: <FaReact size={90} style={{color: '#02d2f8'}}/>
    },
    {
        name: 'Ruby',
        logo: <DiRuby size={90} style={{color: '#d31904'}}/>
    },
    {
        name: 'Ruby on Rails',
        logo: <i class="devicon-rails-plain-wordmark colored" style={{fontSize: '90px', textAlign: 'center'}}></i>
    },
    {
        name: 'PostgreSQL',
        logo: <DiPostgresql size={90} style={{color: '#33638c'}}/>
    },
    {
        name: 'Express.js',
        logo: <i class="devicon-express-original-wordmark" style={{fontSize: '90px', textAlign: 'center'}}></i>
    }, 
    {
        name: 'Adobe XD',
        logo: <img src={xdLogo} alt='adobeXD-logo' />
    },
    {
        name: 'Bootstrap',
        logo: <i class="devicon-bootstrap-plain colored" style={{fontSize: '90px', textAlign: 'center'}}></i>
    },
    {
        name: 'HTML',
        logo: <FaHtml5 size={90} style={{color: '#e44d26'}}/>  
    },
    {
        name: 'CSS',
        logo: <FaCss3Alt size={90} style={{color: '#379ad6'}}/>
    }
]

export const projects = [
    {
        title: "Fusion Wireless Clone",
        description: "A project completed in collaboration to create a clone of a company made website (fusionwireless.com). Our goal was to show to businesses that we can code up to company standard and produce a final product from scratch. Currently only mobile responsive but implements the Google Maps Api and updating state components",
        img: fusionGif,
        webLink: "https://fusionwireless.netlify.com/",
        repoLink: "https://github.com/gdelv/fusionWireless",
        technologyUsed: [
            {
                name: 'React.js',
                logo: <FaReact size={50} style={{color: '#02d2f8'}}/>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}}/>
            }
        ]
    },
    {
        title: "Duck Click",
        description: "My own spinoff of the classic game duck hunt but using Express for the backend server and HTML, CSS and JavaScript for my front end.",
        img: duckClick,
        webLink: "https://duck-click.herokuapp.com/",
        repoLink: "https://github.com/gdelv/duckHunt",
        technologyUsed: [
            {
                name: 'Express.js',
                logo: <i class="devicon-express-original-wordmark" style={{fontSize: '50px', textAlign: 'center'}}></i>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}}/>
            },
            {
                name: 'HTML',
                logo: <FaHtml5 size={50} style={{color: '#e44d26'}}/>  
            },
            {
                name: 'CSS',
                logo: <FaCss3Alt size={50} style={{color: '#379ad6'}}/>
            }
        ]
    },
    {
        title: "Nike Jordan Clone",
        description: "A full stack cloned Nike Jordan website built from scratch using React and Ruby on Rails. The goal was to collaborate and create a company standard website once again to show businesses that we are approaching that level of knowledge. As of now it is a static website that implements cool ternary logic for the navigation bar that changes class and state based on window height. It is made to look almost identical to the nike jordan website. Currently it is only mobile responsive and only the landing page is finished, but the backend is fully setup and we will have cart implementation and a shoe detail page in the future.",
        img: jordanGif,
        webLink: "https://nikejordan.netlify.com/",
        repoLink: "https://github.com/gdelv/jordanFrontend",
        technologyUsed: [
            {
                name: 'React.js',
                logo: <FaReact size={50} style={{color: '#02d2f8'}}/>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}}/>
            },
            {
                name: 'Ruby',
                logo: <DiRuby size={50} style={{color: '#d31904'}}/>
            },
            {
                name: 'Ruby on Rails',
                logo: <i class="devicon-rails-plain-wordmark colored" style={{fontSize: '3.5em', textAlign: 'center'}}></i>
            }
        ]
    },
    
    {
        title: "Receta",
        description: "A full stack website where my back end was all done on Ruby on Rails to hold all my recipe data and I used Heroku to host the server. Using React I was able to connect the front end to my back end recipe server and render my recipe information using a mobile responsive approach. To test deploy the front end I used Surge and once complete I used Netlify to host the front end server.",
        img: recetaPic,
        webLink: "https://recetasbyg.netlify.com/",
        repoLink: "https://github.com/gdelv/recipe_application_frontend",
        technologyUsed: [
            {
                name: 'React.js',
                logo: <FaReact size={50} style={{color: '#02d2f8'}}/>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}}/>
            },
            {
                name: 'Ruby',
                logo: <DiRuby size={50} style={{color: '#d31904'}}/>
            },
            {
                name: 'Ruby on Rails',
                logo: <i class="devicon-rails-plain-wordmark colored" style={{fontSize: '3.5em', textAlign: 'center'}}></i>
            }
        ]
    },
    {
        title: "Meal Prep",
        description: "Built with a team of 2 UX/UI designers and 2 other software engineers, a website where a user can browse through meals per different weeks and choose which they would like delivered. In order to build out the product in only 3 days we used React Bootstrap to match the design requested.",
        img: mealPrepPic,
        webLink: "http://mealprep.surge.sh/",
        repoLink: "https://github.com/gdelv/CollabProject",
        technologyUsed: [
            {
                name: 'React',
                logo: <FaReact size={50} style={{color: '#02d2f8'}}/>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}} />
            },
            {
                name: 'Bootstrap',
                logo: <i class="devicon-bootstrap-plain colored" style={{fontSize:'3em'}}></i>

            }
        ]
    },
    {
        title: "Grocery World",
        description: "Got tired of using notes to remember what groceries to buy during the week, so I created my own website so my wife and I can see what's needed at anytime. For the front end I used React to fetch data from mockAPI server with all of my weekly grocery data.",
        img: groceryWorldPic,
        webLink: "http://shoppinglist2019.surge.sh/",
        repoLink: "https://github.com/gdelv/shopping_list_client",
        technologyUsed: [
            {
                name: 'React.js',
                logo: <FaReact size={50} style={{color: '#02d2f8'}}/>
            },
            {
                name: 'JavaScript',
                logo: <DiJavascript size={50} style={{color: '#dfc12d'}}/>
            }
        ]
    }
]