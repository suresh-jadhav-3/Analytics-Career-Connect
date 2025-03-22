import React from 'react'
import Hero from '../../components/About/Hero'
import WhatWeDo from '../../components/About/WhatWeDo'
import Team from '../../components/About/Team'
import Journey from '../../components/About/Journey'
import FAQ from '../../components/About/FAQ'
import CTA from '../../components/About/CTA'

function About() {
    return (
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
            <Hero />
            <WhatWeDo />
            <Team />
            <Journey />
            <FAQ />
            <CTA />
        </div>
    )
}

export default About