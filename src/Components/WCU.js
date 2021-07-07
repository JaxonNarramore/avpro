import React from 'react'
import './WCU.css'

export default function WCU() {
    return (
        <div className='wcu-container'>
            <div className='wcu-div'>
                <img className='wcu-img' src="Images/brain.png" alt="Audio Visual Installation Expierence Emblem" title="Audio Visual Installation Expierence" />
                <p className='wcu-h'>Experience</p>
                <p className='wcu-p'>All of our techniciians have multiple years of expierence in the industry</p>
            </div>
            <div className='wcu-div'>
                <img className='wcu-img' src="Images/warrenty.png" alt="Audio Visual Installation Lifetime Warrenty Emblem" title="Audio Visual Installation Lifetime Warrenty" />
                <p className='wcu-h'>Lifetime Warrenty</p>
                <p className='wcu-p'>We offer a lifetime installation warrenty on all of our installations</p>
            </div>
            <div id='last-div' className='wcu-div'>
                <img id='warrenty' className='wcu-img' src="Images/clock.png" alt="Audio Visual Installation Quick Responses Emblem" title="Audio Visual Installation Quick Responses" />
                <p className='wcu-h'>Quick Responses</p>
                <p className='wcu-p'>We will get back to you the same day you call or fill out the form!</p>
            </div>
        </div>
    )
}
