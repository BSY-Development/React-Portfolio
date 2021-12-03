import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';
require('dotenv').config();

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = ({ target: { value } }, func) => {
    func(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailToSend = {
      from_name: name,
      email,
      message,
    };
    const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;
    emailjs.send(REACT_APP_SERVICE, REACT_APP_TEMPLATE, emailToSend, REACT_APP_USER)
      .then((_result) => {
        setMessageStatus('Message sent!')
    }, (_error) => {
      setMessageStatus('Oops! Something went wrong...')
    });
  }

  if (messageStatus.length) {
    setTimeout(() => {
      setMessageStatus('');
    }, 10000);
  }

  return (
    <div id="contact" className="div-contact">
      <h1 className="project-text">Contact</h1>
      <fieldset className="field-area">
        <form className="form-area" onSubmit={ handleSubmit }>
          <input className="input-field" type="text" required placeholder="Your Name" onChange={ (e) => handleChange(e, setName) } />
          <input className="input-field" type="email" required placeholder="E-mail" onChange={ (e) => handleChange(e, setEmail) } />
          <textarea required onChange={ (e) => handleChange(e, setMessage) } />
          <p className="msg-response">{ messageStatus }</p>
          <button className="btn-submit" type="submit">Send Message</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Contact;
