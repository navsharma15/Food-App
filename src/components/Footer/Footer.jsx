import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quis, pariatur voluptatem blanditiis voluptates, magnam, nulla quos omnis fugit beatae repellat tempora provident. Doloremque facere magni iste eum, iure veniam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 223-344-5566</li>
                    <li>contact@tomato</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 || Made By Nav Sharma</p>
    </div>
  )
}

export default Footer
