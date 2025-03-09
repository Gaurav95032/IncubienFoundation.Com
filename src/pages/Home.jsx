import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import MilestoneSection from '../components/MilestoneSection'
import VisionSection from '../components/VisionSection'
import LatestIncubine from '../components/LatestIncubine'
import OurStartups from '../components/OurStartups'
import Testimonials from '../components/Testimonials'
import OurPartners from '../components/OurPartners'
import FAQSection from '../components/FAQSection'

const Home = () => {
  return (
      <>
      <HeroSection />
      <AboutSection />
      <MilestoneSection />
      <VisionSection />
      <LatestIncubine />
      <OurStartups />
      <Testimonials />
      <OurPartners />
      <FAQSection />
      </>
  )
}

export default Home