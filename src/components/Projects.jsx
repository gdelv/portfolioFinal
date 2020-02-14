import React from 'react'
import { projects } from "../data";
import { FaLink, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <>
            <h2 className='projects-title' id="projects">PROJECTS</h2>
            {projects.map(project => {
                return (
                    <div className='projects-container'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.img} alt='project' />
                        <div className='project-buttons-container'>
                            <form action={project.webLink} target='_blank'>
                                <button type='submit'>
                                    <FaLink size={50} />
                                </button>
                            </form>
                            <form action={project.repoLink} target='_blank'>
                                <button type='submit'>
                                    <FaGithub size={50} />
                                </button>
                            </form>
                        </div>
                        <div className='tech-container'>
                            {project.technologyUsed.map(tech => {
                                return (
                                    <div>
                                        {tech.logo}
                                        <p>{tech.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Projects