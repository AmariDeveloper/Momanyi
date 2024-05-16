import AboutSection from "../components/homepage/AboutSection"
import HeroSection from "../components/homepage/HeroSection"
import "../css/home.css"
import Quote from "../components/homepage/Quote"
import ProjectsSection from "../components/homepage/ProjectsSection"
import Highlights from "../components/homepage/Highlights"
import Services from "../components/homepage/Services"
import CallToAction from "../components/homepage/CallToAction"
import Socials from "../components/homepage/Socials"
import Footer from "../components/homepage/Footer"
import Navbar from "../components/navigation/Navbar"
const Home = () => {
  return (
    <>
           <Navbar />
           <HeroSection />
           <AboutSection />
           <Quote />
           <Services />
           <ProjectsSection />
           <Highlights />
           <Socials />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Home