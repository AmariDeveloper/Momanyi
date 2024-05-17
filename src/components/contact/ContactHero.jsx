import ContactForm from "./ContactForm"
const ContactHero = () => {
  return (
    <div className="contact-hero">
                <div className="contact-hero-texts">
                          <div className="hero-texts-inner">
                                   <h2>Send Me a Message</h2>
                                   <p>Whether you are looking to collaborate, creating valuable impactful resources, organizing a speaking engagement or would like to partner with me, simply reach out to me by filling the form below.</p>

                                   <ContactForm />
                          </div>
                </div>
                <div className="contact-image"></div>
    </div>
  )
}

export default ContactHero