import React from 'react';

export default function ContactForm() {
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <form>
        <div className="input-field">
          <input type="text" id="name" name="name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <textarea id="message" name="message" className="materialize-textarea" required></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" className="btn waves-effect waves-light">Send</button>
      </form>
      <div className="contact-icons">
        <a href="mailto:ml_barcelos@hotmail.com" className="btn-floating btn-large waves-effect waves-light red contact-icon">
          <i className="material-icons">email</i>
        </a>
        <a href="https://wa.me/+4794061717" target="_blank" rel="noopener noreferrer" className="btn-floating btn-large waves-effect waves-light green contact-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}