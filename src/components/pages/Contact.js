import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

function Contact() {
  const form = useRef();

//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({user_email: '', user_name: '', message: ''});
  const { user_name, user_email, message } = setFormState; 

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'user_email') {
        validateEmail(inputValue);
        if(!validateEmail(inputValue)) {
            setErrorMessage('Email is invalid');
        } else {
            setErrorMessage('')
        }
    } else if (inputType === 'user_name') {
        if(!inputValue.length) {
            setErrorMessage('Name field is required');
        } else {
            setErrorMessage('')
        }
    } else {
        if(!inputValue.length) {
            setErrorMessage('Please leave a message!');
        } else {
            setErrorMessage('')
        }
    }
  }

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setFormState({...formState, [inputType]: inputValue})

    console.log(formState)
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aiunw9b', 'template_cih71q3', form.current, 'user_5Tw6TAen1xZuaNMvCLMwT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setFormState({email: '', name: '', message: ''})
  };

  return (
      <div className="contactContainer"> 
          <h1>Contact:</h1>
        <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Name</label>
            <input defaultValue={user_name} type="text" name="user_name" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Name"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Email</label>
            <input defaultValue={user_email} type="email" name="user_email" onChange={handleChange} onBlur={handleBlur} className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Message</label>
            <textarea defaultValue={message} name="message" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Leave Message Here"/>
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