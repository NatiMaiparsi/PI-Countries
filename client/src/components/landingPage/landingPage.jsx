import React from 'react';
import {Link} from 'react-router-dom';
import './landingPage.modules.css'

export default function LandingPage() {
    return (
        <div className='landing'>
            <div className='containerLanding'>
            <h1 className='text'>Welcome</h1>
            <Link className='link' to='/home'>
                <button className='buttonLanding'>Enter</button>
            </Link>
            </div>
        </div>
    )
}