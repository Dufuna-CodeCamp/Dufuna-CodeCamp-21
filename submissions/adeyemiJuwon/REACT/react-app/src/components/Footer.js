import React from 'react';
import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillFacebook,
} from 'react-icons/ai';
import './footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h2>Contact Us</h2>
      <div className="social">
        <AiFillTwitterSquare className="social-icon" />
        <AiFillYoutube className="social-icon" />
        <AiFillFacebook className="social-icon" />
      </div>
      <div className="footer_down">
        <p>Terms & Conditions . Privacy Policy</p>
        <p>
          &copy; Copyright <span id="year">{year}</span> FoodBag is a registered
          trademark
        </p>
      </div>
    </div>
  );
}

export default Footer;
