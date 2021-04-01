import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Values from './Values'
import Contact from './Contact'
import Services from './Services'
import RecentInstalls from './RecentInstalls'
export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <Values />
            <Services />
            <RecentInstalls />
            <Contact />
        </div>
    )
}
