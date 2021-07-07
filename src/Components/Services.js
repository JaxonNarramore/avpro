import React from "react";
import './Services.css'
import "animate.css/animate.min.css";

export default function Services() {
    return (
        <div id='services' className='services-container'>
            <p className='service-title'>SERVICES</p>
            <hr className='divider' />
            <div class="services">
                <div className='grid-images'>
                    <a href="https://www.customavrack.com/">
                        <img title="Custom AV Systems" className='grid-image' src="Images/customav.jpeg" alt="Custom AV Installation" title="Custom AV Installation" />
                    </a>
                    <h4 className='service-txt'>Custom AV Systems</h4>
                </div>
                <div className='grid-images'>
                    <a href="https://www.crutchfield.com/S-Ghb3Ghx7iPm/m_196150/Multi-room-Audio.html">
                        <img title="Whole Home Audio" className='grid-image' src="Images/wholehome.jpg" alt="Whole Home Audio Installation" title="Whole Home Audio Installation" />
                    </a>
                    <h4 className='service-txt'>Whole Home Audio</h4>
                </div>
                <div className='grid-images'>
                    <img title="TV Mounting" className='grid-image' src="Images/mounting.jpg" alt="TV Mounting" title="TV Mounting" />
                    <h4 className='service-txt'>TV Mounting</h4>
                </div>
                <div className='grid-images'>
                    <img title="Home Automation" className='grid-image' src="Images/homeauto2.jpg" alt="Home Automation" title="Home Automation" />
                    <h4 className='service-txt'>Home Automation</h4>
                </div>
                <div className='grid-images'>
                    <img title="Security Camera Installation" className='grid-image' src="Images/securitycamera.jpg" alt="Security Camera Installation" title="Security Camera Installation" />
                    <h4 className='service-txt'>Security Camera Installation</h4>
                </div>
                <div className='grid-images'>
                    <a href="https://www.crutchfield.com/S-nPard9UeeIB/brands/landingpages/hometheater.aspx">
                        <img title="" className='grid-image' src="Images/hometheature.jpg" alt="Home Theatre Installation" title="Home Theatre Installation" />
                    </a>
                    <h4 className='service-txt'>Home Theater Installation</h4>
                </div>
            </div>
        </div>
    )
}
