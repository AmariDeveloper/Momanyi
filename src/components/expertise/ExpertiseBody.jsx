import { services } from "../../data/services"
const ExpertiseBody = () => {
  return (
    <div className="expertise-body">
                <div className="inner-row">
                           <div className="expertise-body-content">
                                      <h3>How I can help you</h3>
                                      <p className="intro">I amplify voices and drive Change and use the power of communication to empower others and create a more impactful future.</p>

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

export default ExpertiseBody