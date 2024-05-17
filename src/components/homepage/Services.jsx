import { Link } from "react-router-dom"
import { services } from "../../data/services"

const Services = () => {
  return (
    <div className="services-section">
              <div className="inner-row">
                        <div className="services-section-content">
                                  <div className="services-intro">
                                            <div className="services-intro-texts">
                                                        <h3>How I can help You</h3>
                                                        <p> I amplify voices and drive Change and use the power of communication to empower others and create a more impactful future.</p>
                                            </div>
                                            <Link to={'/expertise'}>Explore All <span></span></Link>
                                  </div>
                                  <div className="services-row">
                                              { services.map(item=> 
                                                     <div className="service-moja" key={item.id}>
                                                                <h4>{item.service_title}</h4>
                                                                <p>{item.description}</p>
                                                     </div>
                                              )}
                                  </div>
                        </div>
              </div>
    </div>
  )
}

export default Services