import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';

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
    emailjs.send("service_fxkt7lb","template_vehcyvk", emailToSend, 'user_O5Hm6RiNqHYto2MLFR4CE')
      .then((result) => {
        setMessageStatus('Message sent!')
    }, (error) => {
      setMessageStatus('Oops! Something went wrong...')
    });
  }

  return (
    <fieldset className="field-area">
      <form className="form-area" onSubmit={ handleSubmit }>
        <input type="text" placeholder="Your Name" onChange={ (e) => handleChange(e, setName) } />
        <input type="email" placeholder="E-mail" onChange={ (e) => handleChange(e, setEmail) } />
        <textarea onChange={ (e) => handleChange(e, setMessage) } />
        <p>{ messageStatus }</p>
        <button type="submit">Send Message</button>
      </form>
    </fieldset>
  );
}

export default Contact;
