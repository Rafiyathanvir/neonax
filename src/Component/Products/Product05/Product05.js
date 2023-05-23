import React from 'react'
import './Product05.css'

export default function Product05() {
  return (
    <>
      <div id="Product05">
      <div className="top_bannerp5">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>TELEMEDICINE EQUIPMENT HUBNARROW BAND PLCC MESH</h2>
        </div>
        <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">TELEMEDICINE EQUIPMENT HUB</h1>
        <div className="devide" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000"></div>
        <div className="product05">
        <div className="pro_01">
            <ul data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                <p>Technologies Used Blood Pressure, Temperature, Weight, Height,
                    Heartbeat, ECG Measurement, device integration through ZigBee,
                    Bluetooth and Wi Fi</p>
                <p>Opportunities: Remote Patient Monitoring</p>
                <p>Remote Patient Monitoring (RPM) allows patients to use mobile
                    medical devices and technology to gather patient generated
                    health data (PGHD) and present it to healthcare professionals.</p>
            </ul>
            <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/health.png" alt="" />
        </div>
        <div className="pro_02" data-aos="zoom-in" data-aos-duration="3000">
          <img src="./assets/meter01.png" alt="" />
          <img src="./assets/ecg01.png" alt=""  className='P01'/>
          <img src="./assets/ecg02.png" alt="" className='P01'/>
        </div>
        </div>
      </div>
    </>
  )
}
