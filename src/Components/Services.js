import React, { useState } from "react";
import './Services.css'

export default function Services() {
    return (
        <div id='services' className='services-container'>
            <p className='service-title'>Our Services</p>
            <div class="services">
                <div className='grid-images'>
                    <img className='grid-image' src="Images/hometheature.jpg" alt="" />
                    <p className='service-txt'>Home Theature Installation</p>
                </div>
                <div className='grid-images'>
                    <img className='grid-image' src="Images/mounting.JPG" alt="" />
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
            </div>
        </div>
    )
}
