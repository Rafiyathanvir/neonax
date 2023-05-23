import React from 'react'
import './Product04.css'

export default function Product04() {
  return (
    <>
      <div id="Product04">
        <div className="top_bannerp4">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>BLUETOOTH/WIFI BASED IOT APPLICATION</h2>
        </div>
        <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">BLUETOOTH/WIFI BASED IOT APPLICATION</h1>
        <div className="devide" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000"></div>
        <div className="product04" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <div className="pro_1001">
                <h3 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">Project Scope BLE based IOT Devices</h3>
                <div className="sub_pro" >
                    <h3>Processor/Controllers Used :</h3>
                    <ul>
                        <li>ESP32</li>
                        <li>4MB Flash 8 MB Flash AC</li>
                        <li>Control</li>
                        <li>Board Size 45 mm Día</li>
                        <li>Power 120 230 V AC input</li>
                        <li>Super cap based RTC backup</li>
                    </ul>
                </div>
                <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/bluetooth-iot-devices.jpg" alt="" />
                {/* </div> */}
                <div className="high" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                    <h3>Execution Highlights</h3>
                    <ul>
                        <li>Duration (Prototype) = 2 months</li> 
                        <li>Schematics, Layout</li>
                        <li>Supply Chain</li>
                        <li>Proto typing by EMS Partners</li>
                        <li>Bring up, Functional tests & Validation</li>
                        <li>Firmware</li>
                        <li>Impedance controlled Multilayer PCBs</li>
                        <li>Systems with multiple PCBs</li>
                    </ul>
                </div>
                <div className='pic222' data-aos="zoom-in" data-aos-duration="3000">
                <img src="./assets/wifi-iot-devices.jpg" alt="" />
                </div>
            </div>
            <div className="pro_2002" data-aos="zoom-in" data-aos-duration="3000">
                <div className="top">
                <img src="./assets/blue3.png" alt="" />
                <img src="./assets/blue4.png" alt="" />
                <img src="./assets/blue6.png" alt="" />
                </div>
            <div className="bottom">
                <img src="./assets/blue7.png" alt="" />
                <img src="./assets/blue5.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
