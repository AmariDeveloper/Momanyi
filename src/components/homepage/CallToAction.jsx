import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <div className="call-to-action-section">
                <div className="expanders">
                            <div className="expander _1"></div>
                            <div className="expander _2"></div>
                            <div className="expander _3"></div>
                            <div className="expander _4"></div>
                            <div className="expander _5"></div>
                            <div className="expander _6"></div>
                </div>
                <div className="call-to-action-content">
                             <h3>Let&apos;s Talk</h3>
                             <h2> Ready to Build a Brighter Future Together. Partner with Me.</h2>
                             <p>Excited to collaborate! Whether it&apos;s a partnership, volunteer work, or sharing insights  –  I&apos;m all in! Let&apos;s chat and turn ideas into action.</p>

                             <Link to={'/'}>Schedule a Call <span></span></Link>
                </div>
    </div>
  )
}

export default CallToAction