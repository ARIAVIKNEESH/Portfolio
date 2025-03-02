import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.css"; // Import CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      if (response.status === 200) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">CONTACT ME</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Name*" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} />
          </div>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} />
          <button type="submit" disabled={loading} className="submit-button">
            {loading ? "Submitting..." : "Submit"}
          </button>
          {success && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">{error}</p>}
        </form>

        <div className="contact-info">
          <h3>Aria Vikneesh</h3>
          <p className="contact-role">Web Developer</p>
          <p><strong>Phone</strong><br />7010615636</p>
          <p><strong>Email</strong><br />usaria2005@gmail.com</p>
          <p><strong>Website</strong><br />https://ariaportfolio1.netlify.app</p>
          <div className="social-icons">
            <i className="fab fa-behance"></i>
            <i className="fab fa-dribbble"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
