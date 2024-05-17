import { useCallback, useContext, useEffect, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import { sidebarContext } from "./sidebarcontext"
import { CgClose } from "react-icons/cg";
const MobileMenu = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
    const mobileWrapper = useRef();
  const removeSidebar = () => setSidebarStatus(false);
    const handleClick = useCallback((e) => {
              if(mobileWrapper.current && !mobileWrapper.current.contains(e.target)){
                      setSidebarStatus(false)
              }else{
                     setSidebarStatus(true)
              }
    }, [setSidebarStatus])

    useEffect(() => {
             document.addEventListener("click", handleClick, true)
    }, [handleClick])

  return (
    <div ref={mobileWrapper} className={sidebarStatus ? "mobile-menu active" : "mobile-menu"}>
                  <div className="mobile-header">
                            <div className="inner-row">
                                    <Link to={'/'} className="logo">
                                              <h1>Mo.Momanyi</h1>
                                     </Link>
                                     <span onClick={removeSidebar}><CgClose /></span>
                            </div>
                  </div>
                 <ul>
                           <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/projects'}>Projects</NavLink></li>
                            <li><NavLink to={'/expertise'}>Expertise</NavLink></li>
                            <li><NavLink to={'/'}>Resources</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact</NavLink></li>
              </ul>
    </div>
  )
}

export default MobileMenu