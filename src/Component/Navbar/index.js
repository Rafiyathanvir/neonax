import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


export default function Navbar() {
  
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    });
  }, []);

  
  return (
    <>
        <header className={`navbar ${scrollDown ? 'scroll-down' : ''}`}>
        <div className="container">
            <div className="header_left">
                <div href="/" className="logo">
                <Link to='/new/'><img loading='lazy' src='./assets/neonax.svg'  alt=""/></Link>
                </div>
            </div>
            <div className="header_right">
            <label className="nav-icon" htmlFor="navTrigger"><i className="fa-solid fa-bars"></i></label>
                <input type="checkbox" id="navTrigger"/>

                <nav className='main_nav'>
                    <ul className={`navbar ${scrollDown ? 'scroll-down' : ''}`}>
                            <Link to='/new/'>
                            <li>Home</li>
                            </Link> 
                            <Link to='/new/aboutus'><li>
                                About Us</li>
                                </Link>
                        <li><a href='#Product'>Products</a>
                            <i className="fa-solid fa-sort-down"></i>
                            <ul>
                                <Link to='/new/product01'>
                                <li>Gateway / DCU / IoT Hub</li>
                                </Link>
                                <Link to='/new/product02'>
                                <li>Narrow Band PLCC Mesh</li>
                                </Link>
                                <Link to='/new/product03'>
                                <li>6LowPan RF Mesh-15 dB & 28dB</li>
                                </Link>
                                <Link to='/new/product04'>
                                <li>Bluetooth/Wifi Based IOT Application</li>
                                </Link>
                                <Link to='/new/product05'>
                                <li>Telemedicine Equipment Hub</li>
                                </Link>
                                <Link to='/new/product06'>
                                <li>BLDC Drive For Inverter <br /> Refrigerator Compressor</li>
                                </Link>
                            </ul>
                        </li>

                        <li><a href="#Application"> Solution</a>
                            <i className="fa-solid fa-sort-down"></i>
                            <ul>
                                <Link to='/new/application01'>
                                <li>Smart Asset Tracking</li>
                                </Link>
                                <Link to='/new/application02'>
                                <li>Smart Parking System</li>
                                </Link>
                                <Link to='/new/application03'>
                                <li>Smart Electricity Meter</li>
                                </Link>
                                <Link to='/new/application04'>
                                <li>Smart Gas & Water Meter</li>
                                </Link>
                                <Link to='/new/application05'>
                                <li>Smart Environmental Sensor</li>
                                </Link>
                                <Link to='/new/application06'>
                                <li>Smart Street Light</li>
                                </Link>
                                <Link to='/new/application07'>
                                <li>Smart Trash Bin</li>
                                </Link>
                                <Link to='/new/application08'>
                                <li>Software Solution</li>
                                </Link>
                                <Link to='/new/application09'>
                                <li>Smart Perimeter Security System</li>
                                </Link>
                            </ul>
                        </li>
                        <Link to='/new/careers'>
                        <li>Careers</li>
                        </Link>
                        <Link to='/new/contactus'>
                        <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}
