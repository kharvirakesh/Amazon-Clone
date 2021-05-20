import React from 'react'
import About from '../Components/Content/About'
import Hero from '../Components/Content/Hero'
import Works from '../Components/Content/Works'

function AppHome() {
    return (
        <div>
            <Hero/>
            <About/>            
            <Works/>
        </div>
    )
}

export default AppHome