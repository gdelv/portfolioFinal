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
            <>
                <main>
                    <About />
                    <Languages />
                    <Projects />
                    <Contact />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        )

    }
}

export default Container