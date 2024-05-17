import { Link, NavLink } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useContext, useEffect, useRef } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { sidebarContext } from "./sidebarcontext";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
 const bgRef = useRef();
 const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
 const openMobileMenu = () => setSidebarStatus(!sidebarStatus)

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
                                                         <li><NavLink to={'/expertise'}>Expertise</NavLink></li>
                                              </ul>
                                   </div>
                                   <Link to={'/'} className="logo">
                                              <h1>Mo.Momanyi</h1>
                                   </Link>
                                   <div className="right-nav">
                                              <ul>
                                                         <li><NavLink to={'/projects'}>Projects</NavLink></li>
                                                         <li><NavLink to={'/contact'}>Resources</NavLink></li>
                                              </ul>
                                              <div className="header-call-to-action">
                                                        <Link to={'/contact'}>Work with Me <span></span></Link>
                                              </div>
                                              <div className="mobile-btn" onClick={openMobileMenu}>
                                                      <span><HiOutlineMenuAlt1 /></span>
                                             </div>
                                   </div>
                                   
                        </div>
              </div>
    </header>
  )
}

export default Header