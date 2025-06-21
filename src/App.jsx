import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import AboutSection from './components/AboutSection.jsx'
import AdditionalInfoSection from './components/AdditionalInfoSection.jsx'
import MembershipSection from './components/MembershipSection.jsx'
import MeetAndGreetSection from './components/MeetAndGreetSection.jsx'
import FortisFilmSection from './components/FortisFilmSection.jsx'
import PaymentInstructionsSection from './components/PaymentInstructionsSection.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <AdditionalInfoSection />
      <MembershipSection />
      <MeetAndGreetSection />
      <FortisFilmSection />
      <PaymentInstructionsSection />
      <Footer />
    </div>
  )
}

export default App