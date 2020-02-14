import React from 'react'
import Footer from './Footer'
import About from '../components/About'
import Languages from '../components/Languages'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Container = () => {
        return (
            <div className='content-container'>
                <main>
                    <About />
                    <Languages />
                    <Projects />
                    <Contact />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
}


export default Container