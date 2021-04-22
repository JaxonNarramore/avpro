import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Values from './Values'
import Contact from './Contact'
import Services from './Services'
import WCU from './WCU'
export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <WCU />
            <Services />
            <Values />
            <Contact />
        </div>
    )
}
