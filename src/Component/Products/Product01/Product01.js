import React from 'react'
import './Product01.css'

export default function Product01(){
  return (
    <>
      <div id="Product01">
      <div className="top_bannerp1">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>GATEWAY / DCU / IoT Hub</h2>
            
        </div>
        <div className="product_01" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="2000">
          <h1>GATEWAY / DCU / IoT Hub</h1>
          <div className="devide"></div>
          <div className="pro_content">
            <div className="pro_0001">
              <div className="pro-top">
              <h3>Solution Enables the Management and Control Of Large and Complex Smart Metering
                  Infrastructures</h3>
                <p>DCU will act as a connectivity partner for Smart Streetlight, Automation and Smart
                metering solution. DCU collects information and data from Energy Meters, Water meter
                and Gasmeter.</p>
                <p>Data will be saved into the local storage before forwarding data to the utility. The built
                in Web Server feature increase flexibility and convenience, making it easy to configure
                and maintain the systemvia internet.</p>
                </div>
                <img src="./assets/DCU.jpg" alt="" />
                </div>
                
          </div>
          
                

          <div className="pro_03" data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1500">
            <img src="./assets/IOT.png" alt="" />
            <p>NeonaX’s cost optimized metering communications solutions DCU, offer scalable and
              secure technology for Advanced Metering Infrastructure (AMI) deployments..
              SC20</p>
          </div>
        </div>
      </div>
    </>
  )
}
