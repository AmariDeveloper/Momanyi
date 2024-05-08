import { Link, NavLink } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
 const bgRef = useRef();

 useEffect(() => {
         const headerWrapper = bgRef.current;

         let ctx = gsap.context(() => {
                gsap.to(headerWrapper.querySelector(".bg-header"), {
                       y: 0,
                       duration: 1,
                       ease: 'none',
                       scrollTrigger: {
                            scrub: true,
                            trigger: headerWrapper,
                            start: 'center',
                            end: '+=100',
                            invalidateOnRefresh: true
                       }
                })
         })

         return () => ctx && ctx.revert();
 }, [])
  return (
    <header ref={bgRef}>
             <div className="bg-header"></div>
              <div className="inner-row">
                        <div className="header-content">
                                   <div className="left-nav">
                                              <ul>
                                                         <li><NavLink to={'/'}>Home</NavLink></li>
                                                         <li><NavLink to={'/about'}>About</NavLink></li>
                                                         <li><NavLink to={'/mo-mentors'}>Mo Mentors</NavLink></li>
                                              </ul>
                                   </div>
                                   <Link to={'/'} className="logo">
                                              <h1>Mo.Momanyi</h1>
                                   </Link>
                                   <div className="right-nav">
                                              <ul>
                                                         <li><NavLink to={'/projects'}>Projects</NavLink></li>
                                                         <li><NavLink to={'/resources'}>Resources</NavLink></li>
                                              </ul>
                                              <div className="header-call-to-action">
                                                        <Link to={'/contact'}>Work with Me <span></span></Link>
                                              </div>
                                   </div>
                        </div>
              </div>
    </header>
  )
}

export default Header