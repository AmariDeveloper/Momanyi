import AboutHero from "../components/about/AboutHero"
import AboutStatements from "../components/about/AboutStatements"
import AboutStory from "../components/about/AboutStory"
import Navbar from "../components/navigation/Navbar"
import "../css/about.css"
import Highlights from "../components/homepage/Highlights"
import Socials from "../components/homepage/Socials"
import CallToAction from "../components/homepage/CallToAction"
import Footer from "../components/homepage/Footer"

const About = () => {
  return (
    <>
           <Navbar />
           <AboutHero />
           <AboutStory />
           <AboutStatements />
           <Highlights />
           <Socials />
           <CallToAction />
           <Footer />
    </>
  )
}

export default About