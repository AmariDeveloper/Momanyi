import { Link } from "react-router-dom"
import Partners from "./Partners"

const AboutSection = () => {
  return (
    <div className="about-section">
             <div className="inner-row">
                       <Partners />
                       <div className="about-section-content">
                                    <h3>About me</h3>
                                    <h2>My name is <span>Evaline Momanyi</span>. I empower women, cultivating a generation of changemakers, and help children thrive. Through mentorship, advocacy and real-life stories stories, I empower people to thrive and become the best versions of themselves.</h2>

                                    <Link to={"/about"}>More About Me <span></span></Link>
                       </div>
             </div>
    </div>
  )
}

export default AboutSection