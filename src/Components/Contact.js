import React from 'react'
import './Contact.css'
import { SiInstagram } from 'react-icons/si';
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Contact() {
    return (
        <div id='quotes'>
            <div class="whole-contact">
                <div class="contact-container">
                    <div className='footer-logo'>
                        <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-logo'>
                            <img className='footLogo' src="Images/logo3.png" alt="Audio Visual Professionals Logo" title="Audio Visual Professionals Logo" />
                        </Link>
                        <p className='fill-out-form'><Link className='fotf' to='quotes' activeClass="active" spy={true} smooth={true} offset={-75} duration={100} >Fill out the form</Link> above or <a className='number-link' href="tel:+5125882677">give us a call</a> for a free same day quote!</p>
                        <div className='icons'>
                            <a href="/" target='_blank'>
                                <AiOutlineFacebook className='facebook' />
                            </a>
                            <a href="https://www.instagram.com/av_professionals/" target='_blank'>
                                <SiInstagram className='instagram' />
                            </a>
                        </div>
                    </div>
                    <div className='about'>
                        <p className='contact-head'>ABOUT </p>
                        <h3 className='abt-div'>AV Pros is an audio visual installation company servicing the greater Austin, TX area</h3>
                    </div>
                    <div className='contact'>
                        <p className='contact-head'>CONTACT</p>
                        <a className='number-link' href="tel:5122174388">
                            <p>512-217-4388</p>
                        </a>
                        <a className='email-link' href="mailto: quotes@av-professionals.com">
                            <p>quotes@av-professionals.com</p>
                        </a>
                    </div>
                    <div id='contact' class="explore">
                        <p className='contact-head'>EXPLORE</p>
                        <Link to='header' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='contact-links'>
                            Home
                        </Link>
                        <Link to='values' activeClass="active" spy={true} smooth={true} offset={1} duration={100} className='contact-links'>
                            Our Values
                        </Link>
                        <Link to='services' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='contact-links'>
                            Our Services
                        </Link>
                        <Link to='quotes' activeClass="active" spy={true} smooth={true} offset={-80} duration={100} className='contact-links'>
                            Get A Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
