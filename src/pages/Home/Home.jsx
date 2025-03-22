import React from 'react'
import Hero from '../../components/Home/Hero'
import Stats from '../../components/Home/Stats'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import Programs from '../../components/Home/Program'
import Quote from '../../components/Home/Quote'
import Tools from '../../components/Home/Tools'
import CallToAction from '../../components/Home/CallToAction'
import ContactForm from '../../components/Home/ContactForm'

function Home() {
    return (
        <div>
            <Hero />
            <Stats />
            <WhyChooseUs />
            <Programs />
            <Quote />
            <Tools />
            <CallToAction />
            <ContactForm/>
        </div>
    )
}

export default Home