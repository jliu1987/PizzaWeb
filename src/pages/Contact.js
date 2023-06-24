import React from 'react'
import ContactImage from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${ContactImage})`}}></div>
      <div className='rightSide'>
        <form method='post'>
          <label for='firstName' >First Name</label>
          <input id='firstName' type='text' placeholder='Please enter your first name' required/><br/>
          <label for='lastName' >Last Name</label>
          <input id='lastName' type='text' placeholder='Please enter your Last name' required/><br/>
          <label for='email' >Email</label>
          <input id='email' type='email' placeholder='Please enter your email' required/><br/>
          <label for='message' >Message</label>
          <textarea id='message' required>Please enter your message.</textarea><br/>
          <button type='submit'>Send A Message</button>
          </form>
      </div>

    </div>
  )
}

export default Contact;
