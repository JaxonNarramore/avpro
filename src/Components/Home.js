import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Values from './Values'
import Contact from './Contact'
import Services from './Services'
import Projects from './Projects'
export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <Services />
            <Values />
            <Projects />
            <Contact />
        </div>
    )
}
