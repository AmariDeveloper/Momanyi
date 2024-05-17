import Navbar from "../components/navigation/Navbar"
import "../css/expertise.css"
import ExpertiseHero from "../components/expertise/ExpertiseHero"
import ExpertiseBody from "../components/expertise/ExpertiseBody"
import Socials from "../components/homepage/Socials"
import CallToAction from "../components/homepage/CallToAction"
import Footer from "../components/homepage/Footer"

const Expertise = () => {
  return (
    <>
           <Navbar />
           <ExpertiseHero />
           <ExpertiseBody />
           <Socials />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Expertise