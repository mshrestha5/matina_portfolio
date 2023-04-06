import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gkandfe",
      "service_gkandfe",
      form.current,
      "Cddl9UsDIcimKmcHS"
    );

    e.target.reset();
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email:</h4>
            <h5>matinashrestha92@gmail.com</h5>
            <a
              href="mailto:matinashrestha92@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="contact__option-icon" />
            <h4>Phone No:</h4>
            <h5>4097976471</h5>
            <a href="tel:4097976471" target="_blank" rel="noreferrer">
              Call
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea name="message" row="7" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
