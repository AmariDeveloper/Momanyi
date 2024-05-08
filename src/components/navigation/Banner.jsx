import gsap from "gsap";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
         let ctx = gsap.context(() => {
                 setTimeout(() => {
                    let tl = gsap.timeline();
                    tl.to(".banner h2", {
                           scale: 0,
                           duration: 1
                    })
                    tl.to(".banner", {
                            y: "-100%",
                            duration: 0.8,
                    })
                 }, 1500)
         })

         return () => ctx && ctx.revert()
    }, [])
  return (
    <div className="banner">
              <h2>Mo.Momanyi</h2>
    </div>
  )
}

export default Banner