import { Link } from "react-router-dom"
import { GiRotaryPhone } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                        <div className="footer-content">
                                   <div className="footer-column">
                                            <Link to={'/'} className="logo">
                                                       <h1>Mo.Momanyi</h1>
                                            </Link>
                                            <p>Championing Balanced Success: I empower women to thrive as mothers, professionals, and individuals, advocating for both their economic empowerment and their children&apos;s rights. </p>
                                   </div>
                                   <div className="footer-column">
                                               <h3>Get in Touch</h3>
                                               <p><span><ImLocation2 /></span>5th Street Radison Blue, 5th Floor - Nairobi,Kenya</p>
                                               <p><span><GiRotaryPhone /></span> +254 712345678</p>
                                               <p><span><FaEnvelopeOpenText /></span>hello@mo-momanyi.com</p>
                                   </div>
                        </div>

                        <div className="copyright">
                                    <p>All rights reserved &copy; {new Date().getFullYear() } Mo.Momanyi</p>
                                    <div className="social-links">
                                              <ul>
                                                      <li><Link to={'/'}><span><FaFacebookF /></span></Link></li>
                                                      <li><Link to={'/'}><span><FaInstagram /></span></Link></li>
                                                      <li><Link to={'/'}><span><FaXTwitter /></span></Link></li>
                                                      <li><Link to={'/'}><span><FaLinkedinIn /></span></Link></li>
                                              </ul>
                                    </div>
                        </div>
              </div>
    </footer>
  )
}

export default Footer