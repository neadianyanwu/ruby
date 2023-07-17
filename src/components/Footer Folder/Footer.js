import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <span className='logo'>RUBY</span>
                    </div>
                    <div className='detail'>
                        <p>Ensuring the best welfare of the buyers</p>
                        <div className='icon'>
                            <li><FaFacebookF /></li>
                            <li><BsInstagram /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><AiOutlineYoutube /></li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;