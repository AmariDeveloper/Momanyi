
const ContactForm = () => {
  return (
    <div className="contact-form">
               <form action="">
                           <div className="form-row">
                                    <label htmlFor="name">Full name</label>
                                     <input type="text" className="form-control" placeholder="Fullname" />
                           </div>
                           <div className="form-row">
                                     <label htmlFor="email">Email Address</label>
                                     <input type="email" className="form-control" placeholder="Email address" />
                           </div>
                           <div className="form-row">
                                     <label htmlFor="subject">Subject</label>
                                     <input type="text" className="form-control" placeholder="Subject/Interest" />
                           </div>
                           <div className="form-row">
                                      <label htmlFor="message">Message</label>
                                     <textarea name="" placeholder="Your message" cols="30" rows="10"></textarea>
                           </div>

                           <button type="submit">Send Enquiry</button>
               </form>
    </div>
  )
}

export default ContactForm