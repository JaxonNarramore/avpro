import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Header.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    return (
        <div class="header-container">
            <div className='whole-caro'>
                <div>
                    <Carousel fade={true} controls={false} className='carousel' indicators={false}>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/caro1.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/caro2.jpeg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/caro4.jpeg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/caro5.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div class="header-wordz">
                <div className='txt-div'>
                    <p className='header-txt'>AUDIO VISUAL</p>
                    <p className='header-txt'>PROFESSIONALS</p>
                    <p className='sub-header'>AUSTIN'S PREMIUM AUDIO VISUAL INSTALLATION SERVICE</p>
                    <div className='header-buttons'>
                        <Link id='buttonid' to='quotes' activeClass="active" spy={true} smooth={true} offset={-90} duration={100}><button type="button" class="btn btn-outline-light">Get A Quote</button></Link>
                        <Link id='buttonid' to='services' activeClass="active" spy={true} smooth={true} offset={-45} duration={100}><button type="button" class="btn btn-outline-light">Our Services</button></Link>
                    </div>
                </div>
                <div className='quote-div'>
                </div>
            </div>
        </div>
    )
}