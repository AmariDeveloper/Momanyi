import AboutSection from "../components/homepage/AboutSection"
import HeroSection from "../components/homepage/HeroSection"
import Banner from "../components/navigation/Banner"
import Header from "../components/navigation/Header"
import "../css/home.css"
import Quote from "../components/homepage/Quote"
import ProjectsSection from "../components/homepage/ProjectsSection"
const Home = () => {
  return (
    <>
           <Banner />
           <Header />
           <HeroSection />
           <AboutSection />
           <Quote />
           <ProjectsSection />
    </>
  )
}

export default Home