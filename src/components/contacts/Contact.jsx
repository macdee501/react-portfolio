import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){

  const form = useRef()
  const SERVICE_ID = "service_7313apm"
  const TEMPLATE_ID = "template_9be8xz1"
  const PUBLIC_KEY = "JBc_eE_-8uBmkiM9c"

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    e.target.reset()
    
  }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mcdonaldlekhoaba@gmail.com</h5>
            <a href="mcdonaldlekhoaba@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form}  onSubmit={sendEmail}>

         <input type="text" name="name" placeholder="Your Full Name" required />  {/* client side validation */}
         <input type="email" name='email' placeholder='Your Email' required /> 
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contact