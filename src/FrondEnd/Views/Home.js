import React from 'react'
import About from '../Components/Content/About'
import Feature from '../Components/Content/Feature'
import Hero from '../Components/Content/Hero'
import Works from '../Components/Content/Works'

function AppHome() {
    return (
        <div>
            <Hero/>
            <About/>
            <Feature/>
            <Works/>
        </div>
    )
}

export default AppHome