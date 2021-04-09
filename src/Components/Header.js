import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Header.css'

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
            <div className='txt-div'>
                <p className='header-txt'>AUDIO VISUAL</p>
                <p className='header-txt'>PROFESSIONALS</p>
                <p className='sub-header'>AUSTIN AREA PREMIUM AUDIO VISUAL INSTALLATION SERVICES</p>
                <div className='header-buttons'>
                    <button type="button" class="btn btn-outline-light">Get A Quote</button>
                    <button type="button" class="btn btn-outline-light">Our Services</button>
                </div>
            </div>

        </div>
    )
}

// import React from 'react'
// import './Header.css'
// import { Link, animateScroll as scroll } from "react-scroll";

// export default function Header() {
//     return (
//         <div id='header' className='header-container'>
//             <div className='a2g-container'>
//                 <p className='leading'>Professional Automation & Media Solutions for Home and Business</p>
//                 <div className='button-group'>
//                     <div className='button-div'>
//                         <Link id='buttonid' to='services' activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>
//                             <button type="button" class="btn btn-outline-light">Our Services</button>
//                         </Link>
//                     </div>
//                     <div className='button-div'>
//                         <Link id='buttonid' to='quotes' activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>
//                             <button type="button" class="btn btn-outline-light">Get A Quote</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
