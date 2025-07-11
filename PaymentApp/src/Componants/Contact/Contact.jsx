
import React, { useState } from 'react';
import './Contact.css';
import msgicon from '../../assets/msg-icon.png';
import mailicon from '../../assets/mail-icon.png';
import phnicon from '../../assets/phone-icon.png';
import locicon from '../../assets/location-icon.png';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    e.target.reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a Message <img src={msgicon} alt="" /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic officia, 
          perspiciatis ratione explicabo veniam eveniet aliquid magnam tenetur numquam ipsum! 
          Obcaecati dolore nobis cum reprehenderit quis laboriosam expedita commodi.</p>
        <ul>
          <li><img src={mailicon} alt="" />Contact@.dev</li>
          <li><img src={phnicon} alt="" />+1 123-456-7890</li>
          <li><img src={locicon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 0123450, United States</li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your Message Here..</label>
          <textarea name="message" rows='6' placeholder='Type your message' required></textarea>
          <div className='button1'>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
          </div>
          {formSubmitted && (
            <p className="success-message">Your message has been submitted successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

