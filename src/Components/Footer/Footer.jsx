import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
 
       <footer className="footer">
        <div className="container">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Estore <span className="text-info">.</span></h2>
         
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <p className="copyright">
        © 2026 All Rights Reserved
      </p>
        </div>
    </footer>
  
  )
}

export default Footer
