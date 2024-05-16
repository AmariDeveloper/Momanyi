import { useEffect, useRef } from "react"
import toto1 from "../../assets/toto1.jpg"
import toto2 from "../../assets/toto2.jpg"
import wta1 from "../../assets/wta1.jpg"
import wta2 from "../../assets/wta2.jpg"
import mentor1 from "../../assets/mo-mentors.jpg"
import mentor2 from "../../assets/quote-image.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    const projRef1 = useRef()
   const projRef2 = useRef();
   const projRef3 = useRef();
    useEffect(() => {
            const proj1Wrapper = projRef1.current;
            const proj2Wrapper = projRef2.current;
            const proj3Wrapper = projRef3.current;

            let ctx = gsap.context(() => {
                   gsap.to(proj1Wrapper.querySelector(".project-container-moja.odd .image-side .image-moja:nth-child(1)"), {
                          width: "150%",
                          duration: 0.5,
                          ease: "none",
                          scrollTrigger: {
                                  scrub: true,
                                  start: "-100%",
                                  end: "+=100%",
                                  trigger: proj1Wrapper,
                          }
                   })
                  gsap.to(proj2Wrapper.querySelector(".project-container-moja.even .image-side .image-moja:nth-child(2)"), {
                          width: "150%",
                          duration: 0.5,
                          ease: "none",
                          scrollTrigger: {
                                  scrub: true,
                                  start: "-100%",
                                  end: "+=100%",
                                  trigger: proj2Wrapper,
                          }
                   })

                   gsap.to(proj3Wrapper.querySelector(".project-container-moja.odd .image-side .image-moja:nth-child(1)"), {
                    width: "150%",
                    duration: 0.5,
                    ease: "none",
                    scrollTrigger: {
                            scrub: true,
                            start: "-100%",
                            end: "+=100%",
                            trigger: proj3Wrapper,
                    }
             })
            })

            return () => ctx && ctx.revert();
    }, [])
  return (
    <div className="projects-section">
               <div className="inner-row">
                         <div className="projects-section-content">
                                    <div className="intro">
                                                 <div className="intro-column">
                                                            <h3>projects</h3>
                                                            <h2>Empowering Change Through Real Stories, Advocacy, and Mentorship.</h2>
                                                 </div>
                                                 <div className="intro-column">
                                                           <p>I believe in the transformative power of human connection to spark change. Through the below listed programs, I am to create bridges of opportunity and empower individuals to reach their full potential. Every story, every voice, every connection fuels my mission: a brighter future where everyone can thrive.</p>
                                                 </div>
                                    </div>

                                    <div ref={projRef1} className="project-container-moja odd">
                                                   <div className="image-side">
                                                              <div className="image-moja">
                                                                          <img src={toto2} alt="" />
                                                              </div>
                                                              <div className="image-moja"><img src={toto1} alt="" /></div>
                                                   </div>
                                                   <div className="description-side">
                                                               <div className="description-side-inner">
                                                                          <h3>Toto Bridge</h3>
                                                                          <h2>Where Motherhood Meets Ambition.</h2>
                                                                          <p> We empower women to flourish as mothers, professionals, and individuals, unlocking their full potential in every aspect of life. </p>

                                                                          <Link to={'/'}>Explore Project <span></span></Link>
                                                               </div>
                                                   </div>
                                    </div>
                                    <div ref={projRef2} className="project-container-moja even">
                                                   <div className="description-side">
                                                            <div className="description-side-inner">
                                                                          <h3>woman thrive africa</h3>
                                                                          <h2>Digital Mentorship Revolution for Women.</h2>
                                                                          <p> Empowering women to share their wisdom, we ignite inspiration and propel future generations of leaders and changemakers through a digital platform.</p>

                                                                          <Link to={'/'}>Explore Project <span></span></Link>
                                                               </div>
                                                   </div>
                                                   <div className="image-side">
                                                              <div className="image-moja"><img src={wta2} alt="" /></div>
                                                              <div className="image-moja"><img src={wta1} alt="" /></div>
                                                   </div>
                                    </div>
                                    <div ref={projRef3} className="project-container-moja odd">
                                                   <div className="image-side">
                                                              <div className="image-moja">
                                                                          <img src={mentor1} alt="" />
                                                              </div>
                                                              <div className="image-moja"><img src={mentor2} alt="" /></div>
                                                   </div>
                                                   <div className="description-side">
                                                               <div className="description-side-inner">
                                                                          <h3>Mo Mentors</h3>
                                                                          <h2>Vulnerability Breeds Strength.</h2>
                                                                          <p> Through honest experiences, mine and others&apos;, we inspire a growth mindset, ignite your power, and empower you to thrive as a human being</p>

                                                                          <Link to={'/'}>Explore Project <span></span></Link>
                                                               </div>
                                                   </div>
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default ProjectsSection