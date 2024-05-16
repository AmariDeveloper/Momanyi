import { useEffect, useRef } from "react"
import aboutImg1 from "../../assets/IMAGE-209.jpg"
import aboutImg2 from '../../assets/aboutImage1.jpg'
import aboutImg3 from "../../assets/da79fa27-c7ef-454b-98ff-2b84da00014a.jpg"
import aboutImg4 from "../../assets/aboutImage2.jpg"
import integrity from "../../assets/integration.png"
import collaboration from "../../assets/teamwork.png"
import empowerment from "../../assets/empowerment.png"
import learning from "../../assets/education.png"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const AboutStatements = () => {
    const panel = useRef();
    const panel2 = useRef();

    useEffect(()=> {
            const panelWrapper = panel.current;
            const panel2Wrapper = panel2.current;

            let ctx = gsap.context(() => {
                gsap.to(panelWrapper.querySelector(".single-image-moja:nth-child(1)"), {
                    width: "150%",
                    duration: 0.5,
                    ease: "none",
                    scrollTrigger: {
                            scrub: true,
                            start: "-150%",
                            end: "+=100%",
                            trigger: panelWrapper,
                    }
                })

                gsap.to(panel2Wrapper.querySelector(".single-image-moja:nth-child(2)"), {
                    width: "150%",
                    duration: 0.5,
                    ease: "none",
                    scrollTrigger: {
                            scrub: true,
                            start: "-150%",
                            end: "+=150%",
                            trigger: panel2Wrapper,
                    }
                })
            })

            return () => ctx && ctx.revert();
    }, [])
  return (
    <div className="about-statements">
             <div className="inner-row">
                          <div className="about-statements-content">
                                    <div className="images">
                                                <div ref={panel} className="about-images-row">
                                                             <div className="single-image-moja">
                                                                        <img src={aboutImg1} alt="" />
                                                             </div>
                                                             <div className="single-image-moja">
                                                                          <img src={aboutImg2} alt="" />
                                                             </div>
                                                </div>
                                                <div ref={panel2} className="about-images-row">
                                                         <div className="single-image-moja">
                                                                        <img src={aboutImg3} alt="" />
                                                             </div>
                                                             <div className="single-image-moja">
                                                                          <img src={aboutImg4} alt="" />
                                                             </div>
                                                </div>
                                    </div>

                                      <h3>I am on a mission to empower individuals from all walks of life with a growth mindset, fostering personal and professional development through mentorship, storytelling, and advocacy.</h3>

                                      <h3>I am pursuing a vision to create a world where women thrive in every aspect of life, while championing equality and empowerment for all.</h3>


                                      <div className="values-section">
                                                <div className="values-intro">
                                                            <h2>My Core Values</h2>
                                                            <p>My values are simple and straight to the point. I work with purpose and responsibility. I believe one plus one is more than just two and draw inspiration from each other to deliver excellence.</p>
                                                </div>
                                                <div className="values-row">
                                                        <div className="value-moja">
                                                                    <div className="icon">
                                                                           <img src={integrity} alt="" />
                                                                 </div>
                                                                 <h4>Integrity</h4>
                                                                 <p>I uphold honesty, transparency, ethical behavior and emphasize building trust through consistent and reliable actions in all aspects of my life.</p>
                                                       </div>
                                                       <div className="value-moja">
                                                                    <div className="icon">
                                                                           <img src={collaboration} alt="" />
                                                                 </div>
                                                                 <h4>Collaboration</h4>
                                                                 <p>I recognize the power of working together towards a common goal. I always promote teamwork, communication and foster partnerships to achieve more significant results.</p>
                                                       </div>
                                                       <div className="value-moja">
                                                                    <div className="icon">
                                                                           <img src={empowerment} alt="" />
                                                                 </div>
                                                                 <h4>Empowerment</h4>
                                                                 <p>I believe in people&apos;s ability to learn, grow and achieve their goals. I promote providing individuals with the resources and support to reach their full potential.</p>
                                                       </div>
                                                       <div className="value-moja">
                                                                    <div className="icon">
                                                                           <img src={learning} alt="" />
                                                                 </div>
                                                                 <h4>Continuous Learning</h4>
                                                                 <p>I always emphasize a growth mindset and the importance of embracing new ideas, learning from challenges, and constantly adapting to improve oneself and stay relevant.</p>
                                                       </div>
                                              </div>
                                      </div>
                          </div>
             </div>
     </div>
  )
}

export default AboutStatements