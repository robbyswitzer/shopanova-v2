import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import TheShift from './components/TheShift'
import WhyItHasntClicked from './components/WhyItHasntClicked'
import PainSection from './components/PainSection'
import HowItWorks from './components/HowItWorks'
import BloomSection from './components/BloomSection'
import Results from './components/Results'
import About from './components/About'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <SocialProofBar />
        <TheShift />
        <WhyItHasntClicked />
        <PainSection />
        <HowItWorks />
        <BloomSection />
        <Results />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
