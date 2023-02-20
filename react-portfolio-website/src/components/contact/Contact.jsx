import React from 'react'
import './contact.css'
import {AiFillMail} from 'react-icons/ai'
import {ImPhone} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jska8rv', 'template_c5zi7rt', form.current, 'IZAFIBC4kJIyKL4TP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>

       <h2>Contact Me</h2>

       <div className='container contact__container'>

        <div className='contact__options'>

          <article className="contact__option">
            <AiFillMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>xsj827@gmail.com</h5>
            <a href='mailto:xsj827@gmail.com'>Send a message</a>
          </article>

          <article className="contact__option">
            <ImPhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>(669) 300-4617</h5>
            
          </article>

        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn'>Send Message</button>

        </form>

       </div>
    </section>
  )
}

export default Contact