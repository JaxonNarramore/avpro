import React, { useState } from "react";
import './Services.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Services() {
    return (
        <div id='services' className='services-container'>
            <p className='service-title'>SERVICES</p>
            <hr className='divider' />
            <div class="services">
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft' animateOnce={true} initiallyVisible={false} duration={2}>
                        <img className='grid-image' src="Images/hometheature.jpg" alt="" />
                        <p className='service-txt'>Home Theater Installation</p>
                    </ScrollAnimation>
                </div>
                <div className='grid-images'>
                    <img className='grid-image' src="Images/mounting.jpg" alt="" />
                    <p className='service-txt'>TV Mounting</p>
                </div>
                <div className='grid-images'>
                    <img className='grid-image' src="Images/securitycamera.jpg" alt="" />
                    <p className='service-txt'>Security Camera Installation</p>
                </div>
                <div className='grid-images'>
                    <img className='grid-image' src="Images/wholehome.jpg" alt="" />
                    <p className='service-txt'>Whole Home Audio</p>
                </div>
                <div className='grid-images'>
                    <img className='grid-image' src="Images/customav.jpeg" alt="" />
                    <p className='service-txt'>Custom AV Systems</p>
                </div>
                <div className='grid-images'>
                    <img className='grid-image' src="Images/homeauto2.jpg" alt="" />
                    <p className='service-txt'>Home Automation</p>
                </div>
                <div className='grid-images'>
                </div>
            </div>
        </div>
    )
}
