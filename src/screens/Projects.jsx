import React from 'react'
import { projects } from "../data";

const Projects = () => {
    return ( 
    <>
        <h3>Projects</h3>
        {projects.map( project => {
            return (
                <div>
        <h3>{project.title}</h3>
                </div>
            )
        })}
    </>
    )
}

export default Projects