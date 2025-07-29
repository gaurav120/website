import React, { useState } from 'react';
import './Cont.css';

const Cont = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xqaerklv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('Message sent successfully!');
    } else {
      setStatus('Message failed to send. Please try again.');
    }
  };

  return (
    <div>

    <div className='rightone' style={{ marginRight: "10%", marginTop: "5%"}}>
          <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {status && <p className="form-status">{status}</p>}
      </form>
     
    </div>

        </div>
      
  
    </div>
  );
};

export default Cont;