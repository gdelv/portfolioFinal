import React from 'react'
import Footer from './Footer'
import About from './About'
import Languages from './Languages'
import Projects from './Projects'
import Contact from './Contact'
//state for button to scroll down to "see more"
class Container extends React.Component {
    state = {

    }

    render() {
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
}

export default Container