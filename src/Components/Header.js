import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Header.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    return (
        <div class="header-container">
            <div class="header-wordz">
                <div className='txt-div'>
                    <p id='header1' className='header-txt'>AUDIO VISUAL</p>
                    <p id='header2' className='header-txt'>PROFESSIONALS</p>
                    <p className='sub-header'>AUSTIN'S PREMIUM AUDIO VISUAL INSTALLATION SERVICE</p>
                    {/* <div className='header-buttons'>
                        <Link id='buttonid' to='quotes' activeClass="active" spy={true} smooth={true} offset={-90} duration={100}><button id='scroll-btn' type="button" class="btn btn-outline-light">Get A Quote</button></Link>
                        <Link id='buttonid' to='services' activeClass="active" spy={true} smooth={true} offset={-45} duration={100}><button id='scroll-btn2' type="button" class="btn btn-outline-light">Our Services</button></Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}