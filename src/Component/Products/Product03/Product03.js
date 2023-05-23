import React from 'react'
import './Product03.css'

export default function Product03() {
  return (
    <>
      <div id="Product03">
      <div className="top_bannerp3">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>6LOWPAN RF MESH-15 dB & 28dB</h2>
        </div>
        <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">6LOWPAN RF MESH-15 dB & 28dB</h1>
        <div className="devide" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000"></div>
        <div className="product03">
            <div className="pro_011" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                <ul>
                    <p>
                    Radio frequency (RF) is the communication technology whose frequencies lies in the range extending
                    from around 20 kHz to 300 GHz, typically these are used in radio communications.
                    </p>
                    <p>In RF, higher is the frequency lower is the band width available reducing the range of communication. The Wi-Smart Utility Network (SUN) industrial alliance specifically the 2–FSK
                    50 kbps option. This is one of the most frequently implemented options in smartmetering application.
                    </p>
                </ul>
            </div>
            <img className="Mesh" data-aos="zoom-in" data-aos-duration="3000" src="./assets/three.png" alt="" />
            <img className='Met' data-aos="zoom-in" data-aos-duration="3000" src="./assets/lowpan.png" alt="" />
            <div className="pro_022" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                <ul>
                    <p>
                    6LoWPAN is connecting more things to the cloud. Low-power, IP-driven nodes and large mesh network
                    support make this technology a great option for Internet of Things (IoT) applications.
                    </p>
                    <p>
                    As the full name implies – “IPv6 over Low-Power Wireless Personal Area Networks” – 6LoWPAN is a
                    networking technology or adaptation layer that allows IPv6 packets to be carried efficiently within
                    small link layer frames.
                    </p>
                </ul>
            </div>
            <div className="pic" data-aos="zoom-in" data-aos-duration="3000">
                <img src="./assets/4.png" alt="" />
                <img src="./assets/8.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}
