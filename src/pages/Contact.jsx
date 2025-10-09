import { useState } from 'react';
import '../styles/contact.css';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no actual email sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="contact-intro">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <Mail size={20} />
              <div>
                <h3>Email</h3>
                <p>chetankiran@9666.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <div>
                <h3>Phone</h3>
                <p>+91 63056 69780</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <div>
                <h3>Location</h3>
                <p>Ap, India</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect on Social Media</h3>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
