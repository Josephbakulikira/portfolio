import React from 'react'
import AboutSection from '../components/aboutSection'
import ContactSection from '../components/contactForm'
import FooterSection from '../components/footer'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/project'
import Skills from '../components/skills'

function HomePage() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>

            <Skills/>
            <ProjectSection itemsPerPage={6}/>
            <ContactSection/>
            <FooterSection/>
        </>
    )
}

export default HomePage
