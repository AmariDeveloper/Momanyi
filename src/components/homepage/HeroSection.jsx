import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
              <div className="hero-texts">
                       <div className="hero-texts-inner">
                                  <div className="hero-texts-content">
                                               <h1>Thrive with <span>Mo Momanyi!</span></h1>
                                               <h3>Empowering Growth, Inspiring a Generation, Mentoring Minds.</h3>
                                  </div>
                       </div>
              </div>
              <div className="hero-image"></div>
              <div className="hero-action">
                          <div className="middle-strip">
                                   <div className="rotating-border">
                                              <div className="call-to-action" onClick={() => navigate("/projects")}>
                                                       <h4>My Work</h4>
                                               </div>
                                   </div>
                          </div>
              </div>
    </div>
  )
}

export default HeroSection