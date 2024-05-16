import { useState } from "react"
import { sidebarContext } from "./sidebarcontext"
import Banner from "./Banner"
import Header from "./Header"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false)

   return (
    <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
                 <Banner />
                 <Header />
                 <MobileMenu />
    </sidebarContext.Provider>
  )
}

export default Navbar