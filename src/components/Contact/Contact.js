import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';
import apikeys from '../../apikeys';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('name is required');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      emailjs.sendForm('gmail', apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
        .then(result => {
          alert("Message submitted successfully! I'll contact you soon!", result.text);
        },
          error => {
            alert('An error occured, Please try again', error.text)
          })
    } else {
      alert('Please fill in all fields');
    }
    console.log(formState);
  }

  return (
    <div className='contact-grid'>
      <h2>Contact Me</h2>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input autofocus='true' type='text' name='name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor='email'>Email Address:</label>
          <input type='text' name='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}

        <button data-testid='button' type='submit'>Submit</button>
      </form>

      <div className='my-info'>
        <a href='mailto:dwright758@gmail.com'>Email: dwright758@gmail.com</a>
        <br></br>
        <a href='tel:9033724740'>Phone: 903.372.4740</a>
      </div>
    </div>
  )
}

export default Contact;