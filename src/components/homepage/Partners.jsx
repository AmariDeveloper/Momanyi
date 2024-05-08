import partner1 from "../../assets/delaware.png"
import partner2 from "../../assets/sanfrancisco.png"
import partner3 from "../../assets/vancouver.png"
import partner4 from "../../assets/snowflake.png"
import partner5 from "../../assets/springfield.png"
import partner6 from "../../assets/vision.png"
import { useRef, useEffect } from "react"

const Partners = () => {
    const scrollerRef = useRef();

    useEffect(() => {
        const scrollerInner = scrollerRef.current.querySelector('.partners-scroller')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
        })
}, [])
  return (
        <div className="partners-section">
                   <h3>Partners & Brands I&apos;m affiliated with.</h3>
                   <div ref={scrollerRef} className="partners-row">
                               <div className="partners-scroller">
                                           <div className="logo-image"><img src={partner1} alt="" /></div>
                                           <div className="logo-image"><img src={partner2} alt="" /></div>
                                           <div className="logo-image"><img src={partner3} alt="" /></div>
                                           <div className="logo-image"><img src={partner4} alt="" /></div>
                                           <div className="logo-image"><img src={partner5} alt="" /></div>
                                           <div className="logo-image"><img src={partner6} alt="" /></div>
                               </div>
                   </div>
        </div>
  )
}

export default Partners