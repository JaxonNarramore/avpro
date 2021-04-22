import React, { useState } from "react";
import './Services.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Services() {
    return (
        <div id='services' className='services-container'>
            <ScrollAnimation animateIn='bounceInRight'
                animateOnce={true} initiallyVisible={false} duration={1}>
                <p className='service-title'>SERVICES</p>
            </ScrollAnimation>
            <hr className='divider' />
            <div class="services">
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight'
                        animateOnce={true} initiallyVisible={false} duration={1}>
                        <img className='grid-image' src="Images/hometheature.jpg" alt="" />
                        <p className='service-txt'>Home Theater Installation</p>
                    </ScrollAnimation>
                </div>
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight' delay={100}
                        animateOnce={true} initiallyVisible={false} duration={1}>
                        <img className='grid-image' src="Images/mounting.jpg" alt="" />
                        <p className='service-txt'>TV Mounting</p>
                    </ScrollAnimation>
                </div>
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight' delay={200}
                        animateOnce={true} initiallyVisible={false} duration={1}>
                        <img className='grid-image' src="Images/securitycamera.jpg" alt="" />
                        <p className='service-txt'>Security Camera Installation</p>
                    </ScrollAnimation>
                </div>
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight'
                        animateOnce={true} initiallyVisible={false} duration={1}>
                        <img className='grid-image' src="Images/wholehome.jpg" alt="" />
                        <p className='service-txt'>Whole Home Audio</p>
                    </ScrollAnimation>
                </div>
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight' delay={100}
                        animateOnce={true} initiallyVisible={false} duration={1}>
                        <img className='grid-image' src="Images/customav.jpeg" alt="" />
                        <p className='service-txt'>Custom AV Systems</p>
                    </ScrollAnimation>
                </div>
                <div className='grid-images'>
                    <ScrollAnimation animateIn='bounceInRight' delay={200}
                        animateOnce={true} initiallyVisible={false} duration={1}>
                        <img className='grid-image' src="Images/homeauto2.jpg" alt="" />
                        <p className='service-txt'>Home Automation</p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}
