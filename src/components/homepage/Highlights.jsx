import highlight1 from "../../assets/Digital innovation dinner.jpg"
import highlight2 from "../../assets/highlight2.jpg"
import highlight3 from "../../assets/nairobi engangement dinner.jpg"
import highlight4 from "../../assets/highlight3.jpg"
import highlight5 from "../../assets/Speaker in a Payments Conference.jpg"
const Highlights = () => {
  return (
    <div className="highlights-section">
              <div className="highlights-content">
                         <div className="highlights-column">
                                   <div className="highlights-box">
                                              <h2>Highlights</h2>
                                              <p>
                                              Dive into my personalized highlights and  remarkable impact I&apos;ve had through dedicated service to spark  passion for creating positive change.
                                            </p>
                                   </div>
                                   <div className="highlight-moja short">
                                              <img src={highlight1} alt="" />
                                             <h3>Digital Innovation Dinner</h3>
                                   </div>
                         </div>
                         <div className="highlights-column">
                                    <img src={highlight2} alt="" />
                                    <h3>Highlight Two</h3>
                         </div>
                         <div className="highlights-column">
                                    <img src={highlight3} alt="" />
                                    <h3>Highlight Two</h3>
                         </div>
                         <div className="highlights-wrapper">
                                  <div className="highlight-moja short">
                                              <img src={highlight4} alt="" />
                                             <h3>A Malnutrition fighting program in Turkana.</h3>
                                   </div>
                                   <div className="highlight-moja short">
                                              <img src={highlight5} alt="" />
                                             <h3>Speaking  at Payments Conference</h3>
                                   </div>
                         </div>
              </div>
    </div>
  )
}

export default Highlights