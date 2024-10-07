import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        '1992137Nn!bellas', 
        '1992137Nn!bellas', 
        form.current,
        'ALz0-RF4ey6w4ISBT' 
      )
      
   try {
    alert('Email sent successfully!');
   } catch (error) {
    console.log(error.text);
    alert('Failed to send email. Please try again later.');
   }
    e.target.reset(); 
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" required />

      <label>Email:</label>
      <input type="email" name="user_email" required />

      <label>Message:</label>
      <textarea name="message" required />

      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;