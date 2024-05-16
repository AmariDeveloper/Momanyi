import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import { Link } from "react-router-dom"
const Socials = () => {
  return (
    <div className="socials-section">
             <div className="inner-row">
                        <div className="socials-section-content">
                                    <h2>Follow Mo.Momanyi for the Latest Updates</h2>
                                    <div className="socials-row">
                                                <Link to={'/'} className="social-box">
                                                           <img src={instagram} alt="" />
                                                           <h3>Instagram</h3>
                                                </Link>
                                                <Link to={'/'} className="social-box">
                                                           <img src={youtube} alt="" />
                                                           <h3>YouTube</h3>
                                                </Link>
                                                <Link to={'/'} className="social-box">
                                                           <img src={linkedin} alt="" />
                                                           <h3>LinkedIn</h3>
                                                </Link>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default Socials