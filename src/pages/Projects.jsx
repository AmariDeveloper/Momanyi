import CallToAction from "../components/homepage/CallToAction"
import Footer from "../components/homepage/Footer"
import ProjectsSection from "../components/homepage/ProjectsSection"
import Socials from "../components/homepage/Socials"
import Navbar from "../components/navigation/Navbar"
import ProjectHero from "../components/projects/ProjectHero"
import "../css/project.css"

const Projects = () => {
  return (
    <>
               <Navbar />
               <ProjectHero />
               <ProjectsSection />
               <Socials />
               <CallToAction />
               <Footer />
    </>
  )
}

export default Projects