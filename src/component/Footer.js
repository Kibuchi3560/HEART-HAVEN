import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h2>Adoption Center Location</h2>
          <p>1234 Hope Street<br />Ushindi, ST 12345</p>
        </div>

        <div className="footer-column">
          <h2>Contact Information</h2>
          <p>We’d love to hear from you! If you’re interested in adopting, volunteering, or simply learning more about our mission, please reach out.</p>
          <p><strong>Phone:</strong> 0723005544</p>
          <p><strong>Email:</strong> Hearthaven@gmail.com</p>
        </div>

        <div className="footer-column">
          <h2>Hours of Operation</h2>
          <p>Monday - Friday: 9 AM - 6 PM<br />Saturday: 10 AM - 4 PM<br />Sunday: Closed</p>
        </div>
      </div>

      <div className="footer-note">
        <h2>Done with Adoption?</h2>
        <p>Upon choosing your child of choice, you will receive an email from Hearthaven@gmail.com for further approval within 3 business days.</p>
      </div>
    </section>
  );
}
