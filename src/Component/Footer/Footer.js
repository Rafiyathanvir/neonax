import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="foot_list">

                    <div className="list02">
                        <h1>OUR COMPANY</h1>
                        <ul>
                            <li>About Neonax</li>
                            <li>Our Team</li>
                            <li>Our Value</li>
                            <li>Our Expertise</li>
                            <li>Our Work Flow</li>
                            <li>Careers</li>

                        </ul>
                    </div>
                    <div className="list02">
                        <h1>PRODUCTS</h1>
                        <ul>
                            <li>DCU</li>
                            <li>Narrow Band PLCC Mesh</li>
                            <li>6LoWPAN</li>
                            <li>Iot Application</li>
                            <li>Telemedicine Equipment HUB</li>
                            <li>BLDC Drive</li>


                        </ul>
                    </div>
                    <div className="list02">
                        <h1>SOLUTION</h1>
                        <ul>
                            <li>Smart Asset Tracking</li>
                            <li>Smart Parking System</li>
                            <li>Smart Electricity Meter</li>
                            <li>Smart Gas & Water MeterMli</li>
                            <li>Smart Environmental Sensor</li>
                            <li>Smart Street Light</li>
                            <li>Smart Trash Bin</li>
                            <li>Software Solution</li>
                            <li>Smart Perimeter Security System</li>

                        </ul>
                    </div>

                    <div className="list01">
                        <div href="/" className="logo1">
                            <Link to='/new/'><img loading='lazy' src="./assets/Neonax.svg" alt="" /></Link>
                        </div>

                        <p>DSO-DDP-A5-D-FXD-1060 Dubai Digital Park-Office A5-Dtec Silicon Oasis, Dubai - UAE
                            Tel: +971564323436
                            Email: enquiry@neonax.com</p>
                        <h2 className='h2logo'>Follow us</h2>
                        <div className="foot_img">
                            <a href="https://www.facebook.com/NeonaEmbeddedDLabz/"><FacebookIcon className='icon' /></a>
                            <a href="https://www.linkedin.com/company/neona-embedded-labz"><LinkedInIcon className='icon' /></a>
                            <a href="https://www.youtube.com/user/NeonaEmbeddedLabz"><YouTubeIcon className='icon' /></a>
                            <a href="https://twitter.com/NeonaEmbedded?s=08"><TwitterIcon className='icon' /></a>
                        </div>
                    </div>
                </div>

                <hr />
                <a href="#copy" className='copy'>Neonax- FZCO - © 2020 | All Rights Reserved</a>
            </div>

        </>
    )
}
