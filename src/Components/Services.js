import React, { useState } from "react";
import './Services.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Services() {
    return (
        <div id='services' className='services-container'>
            {/* <ScrollAnimation animateIn='bounceInRight'
                animateOnce={true} initiallyVisible={false} duration={1.5}> */}
            <p className='service-title'>SERVICES</p>
            {/* </ScrollAnimation> */}
            <hr className='divider' />
            <div class="services">
                <div className='grid-images'>
                    {/* <ScrollAnimation animateIn='bounceInRight'
                        animateOnce={true} initiallyVisible={false} duration={1.5}> */}
                    <img title="" className='grid-image' src="Images/hometheature.jpg" alt="Home Theatre Installation" title="Home Theatre Installation" />
                    <h1 className='service-txt'>Home Theater Installation</h1>
                    {/* </ScrollAnimation> */}
                </div>
                <div className='grid-images'>
                    {/* <ScrollAnimation animateIn='bounceInRight' delay={100}
                        animateOnce={true} initiallyVisible={false} duration={1.5}> */}
                    <img title="TV Mounting" className='grid-image' src="Images/mounting.jpg" alt="TV Mounting" title="TV Mounting" />
                    <h1 className='service-txt'>TV Mounting</h1>
                    {/* </ScrollAnimation> */}
                </div>
                <div className='grid-images'>
                    {/* <ScrollAnimation animateIn='bounceInRight' delay={200}
                        animateOnce={true} initiallyVisible={false} duration={1.5}> */}
                    <img title="Security Camera Installation" className='grid-image' src="Images/securitycamera.jpg" alt="Security Camera Installation" title="Security Camera Installation" />
                    <h1 className='service-txt'>Security Camera Installation</h1>
                    {/* </ScrollAnimation> */}
                </div>
                <div className='grid-images'>
                    {/* <ScrollAnimation animateIn='bounceInRight'
                        animateOnce={true} initiallyVisible={false} duration={1.5}> */}
                    <img title="Whole Home Audio" className='grid-image' src="Images/wholehome.jpg" alt="Whole Home Audio Installation" title="Whole Home Audio Installation" />
                    <h1 className='service-txt'>Whole Home Audio</h1>
                    {/* </ScrollAnimation> */}
                </div>
                <div className='grid-images'>
                    {/* <ScrollAnimation animateIn='bounceInRight' delay={100}
                        animateOnce={true} initiallyVisible={false} duration={1.5}> */}
                    <img title="Custom AV Systems" className='grid-image' src="Images/customav.jpeg" alt="Custom AV Installation" title="Custom AV Installation" />
                    <h1 className='service-txt'>Custom AV Systems</h1>
                    {/* </ScrollAnimation> */}
                </div>
                <div className='grid-images'>
                    {/* <ScrollAnimation animateIn='bounceInRight' delay={200}
                        animateOnce={true} initiallyVisible={false} duration={1.5}> */}
                    <img title="Home Automation" className='grid-image' src="Images/homeauto2.jpg" alt="Home Automation" title="Home Automation" />
                    <h1 className='service-txt'>Home Automation</h1>
                    {/* </ScrollAnimation> */}
                </div>
            </div>
        </div>
    )
}
