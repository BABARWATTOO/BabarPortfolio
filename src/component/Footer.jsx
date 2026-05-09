import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">© 2025 All rights reserved</div>
      <div className="footer-center">💙 Created by <span>Babar Ali</span></div>
      <div className="footer-right">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
