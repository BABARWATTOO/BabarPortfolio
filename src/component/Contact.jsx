import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    // Simulate sending
    setFeedback({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setFeedback({ type: '', message: '' }), 3000);
  };

  return (
    <section className="contact-section" id="contact">
      {feedback.message && (
        <div className={`feedback-popup ${feedback.type}`}>
          {feedback.message}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-heading">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-subheading">
          Have a project in mind or want to collaborate? Drop me a message!
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="form-card">
            <h3 className="form-title">
              <FaPaperPlane className="title-icon" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>
              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <h3 className="info-title">Contact Information</h3>
            <div className="contact-info">
              <div className="info-icon-container">
                <FaEnvelope className="info-icon" />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>babarwattoo901@gmail.com</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="info-icon-container">
                <FaPhoneAlt className="info-icon" />
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+92 309 2571957</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="info-icon-container">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
