import React from 'react'
import "./Contact.css"
import {MdOutlineMail,MdWhatsapp} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_icon' />
            <h4>Email</h4>
            <h5>yugal8200@gmail.com</h5>
            <a href="mailto:yugal8200@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className='contact_icon'  />
            <h4>Linkedin</h4>
            <h5>Yugal Verma</h5>
            <a target="_blank" href="https://www.linkedin.com/in/yugal-verma-28b3671ab/">Send a message</a>
          </article>
          <article className="contact_option">
            <MdWhatsapp className='contact_icon'  />
            <h4>WhatsApp</h4>
            <h5>+919899047003</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=919899047003">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="text" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Enter Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
