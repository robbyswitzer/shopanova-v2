import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import PainSection from './components/PainSection'
import HowItWorks from './components/HowItWorks'
import BloomSection from './components/BloomSection'
import Results from './components/Results'
import About from './components/About'
import ResourcesTeaser from './components/ResourcesTeaser'
import FAQ from './components/FAQ'
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
        <PainSection />
        <HowItWorks />
        <BloomSection />
        <Results />
        <About />
        <ResourcesTeaser />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
