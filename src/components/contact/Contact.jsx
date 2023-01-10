import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = ()=> {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vaftqws', 'template_08n9ecp', form.current, 'NpUgD0A_zW8HmRiQR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };


    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon'/>
                       <h4>Email</h4>
                       <h5>adaezeuguw6@gmail.com</h5>
                       <a href='mailto:adaezeuguw6@gmail.com'> send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaTwitter className='contact__option-icon'/>
                       <h4>Twitter</h4>
                       <h5>_adaezepeace</h5>
                       <a href=''> send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp  className='contact__option-icon'/>
                       <h4>Whatsapp</h4>
                       <h5>09033099075</h5>
                       <a href='https://api.whatsapp.com/send?phone+2349033099075' target='_blank'> send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;