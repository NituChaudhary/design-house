import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WelcomeSection from './sections/WelcomeSection'
import WhoWeAreSection from './sections/WhoWeAreSection'
import ProjectSectorSection from './sections/ProjectSectorSection'
import SafetyQualitySection from './sections/SafetyQualitySection'
import CareersSection from './sections/CareersSection'
import ContactUsSection from './sections/ContactUsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <WhoWeAreSection />
        <ProjectSectorSection />
        <SafetyQualitySection />
        <CareersSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  )
}
