import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <div classNameName="email-box">
          <input type="email" placeholder="Enter Email Address" />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column logo-column">
          <h3 className="footer-logo">bakingo</h3>
          <p>&copy; 2025</p>
          <div className="social-icons">
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-youtube-fill"></i>
          </div>
        </div>

        <div className="footer-column">
          <h4>KNOW US</h4>
          <ul>
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Locate Us</li>
            <li>Blog</li>
            <li>Media</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>NEED HELP</h4>
          <ul>
            <li>FAQ</li>
            <li>Cancellation And Refund</li>
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
            <li>Customer Grievance</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>MORE INFO</h4>
          <ul>
            <li>Corporate Cakes</li>
            <li>Coupons & Offers</li>
            <li>Download App</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
