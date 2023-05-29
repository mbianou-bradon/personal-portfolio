import React, { useRef } from 'react'
import "./contact.css";
import emailjs from 'emailjs-com'
import { FiMail } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) =>{
        e.prevenDefault();

        emailjs.sendForm('service_pcnhplk', 'template_7q6ur06', form.current, 'UXXzSMQFtt_pon6aw')
        e.target.reset()
        .then((result)=>{
            console.log(result.text)
        })
        .catch((error)=>{
            console.log(error)
        });
    };

  return (
    <section id='contact'>
        <h5>Get in touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <FiMail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>mbianoubradon2000@gmail.com</h5>
                    <a
                    href="mailto:mbianoubradon2000@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Send a message
                    </a>
                </article>
                <article className="contact__option">
                    <BsLinkedin className="contact__option-icon" />
                    <h4>LinkedIn</h4>
                    <h5>Mbianou Bradon</h5>
                        <a
                        href="https://www.linkedin.com/in/mbianou-bradon/"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Send Me a message
                        </a>
                </article>
                <article className="contact__option">
                    <RiWhatsappLine className="contact__option-icon" />
                    <h4>Whatsapp</h4>
                    <h5>Direct Message</h5>
                    <a
                    href="https://wa.me/23771242032"
                    target="_blank"
                    rel="noreferrer"
                    >
                    WhatsApp Me
                    </a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Full name" required />
                <input type="email" name="email" placeholder="youremail@gmail.com" required />
                <textarea name="message" rows="7" placeholder="Your message" required />
                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>
        </div>

    </section>
  )
}

export default Contact
