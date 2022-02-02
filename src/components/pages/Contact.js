import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

function Contact() {
  const form = useRef();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'user_email') {
        validateEmail(inputValue);
        if(!validateEmail(inputValue)) {
            setErrorMessage('Email is invalid');
        } else {
            setEmail(inputValue);
        }
    } else if (inputType === 'user_name') {
        if(!inputValue.length) {
            setErrorMessage('Name field is required');
        } else {
            setUserName(inputValue);
        }
    } else {
        if(!inputValue.length) {
            setErrorMessage('Please leave a message!');
        } else {
            setMessage(inputValue);
        }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aiunw9b', 'template_cih71q3', form.current, 'user_5Tw6TAen1xZuaNMvCLMwT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setEmail('');
      setUserName('');
      setMessage('');
      setErrorMessage('');
  };

  return (
      <div className="contactContainer">
          <h1>Contact:</h1>
        <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Name</label>
            <input value={userName} type="text" name="user_name" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Name"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Email</label>
            <input value={email} type="email" name="user_email" onChange={handleChange} className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Message</label>
            <textarea value={message} name="message" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Leave Message Here"/>
            <input type="submit" value="Send Message" />
        </div>
        </form>
        {errorMessage && (
            <div>
              <p className="error-text" style={{ color: "red" }}>{errorMessage}</p>
            </div>
        )}
    </div>
  );
};

export default Contact;