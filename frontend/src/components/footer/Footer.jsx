import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="budgetme-footer section-padding">
    <div className="budgetme-footer-heading">
      <h1 className="gradient-text">Gain Financial Freedom By Signing Up for BudgetMe</h1>
    </div>

    <div className="budgetme-footer-btn">
      <p>SignUp Today!</p>
    </div>

    <div className="budgetme-footer-links">
      <div className="budgetme-footer-links-logo">
        <h3>BUDGETME</h3>
        <p>ndubuisisaac@gmail.com, <br /> All Rights Reserved</p>
      </div>
      <div className="budgetme-footer-links-div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="budgetme-footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="budgetme-footer-links-div">
        <h4>Get in touch</h4>
        <p>We are completely opensourced</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="budgetme-footer-copyright">
      <p>@2022 BudgetMe. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;