import React from 'react'
import './Product02.css'

export default function Product02() {
  return (
    <>
      <div id="Product02">
      <div className="top_bannerp2">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>NARROW BAND PLCC MESH</h2>
        </div>
        <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">NARROW BAND PLCC MESH</h1>
        <div className="devide" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000"></div>
        <div className="product02">
        <div className="pro_101" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <p>Power line communication is a communication technology that uses electrical wiring to simultaneously transmit both
                data and electric power without any interference as both are at different frequency It is currently being effectively used for
                telecommunication, tele protection and tele monitoring between electrical substations through EHV power lines and proved to
                be best low cost communication media but the use of PLC through LT distribution lines from consumer meter up to the DCU
                would depend upon the condition of the distribution lines Ipv 6 G 3 PLC and PRIME are widely used protocols to enable large scale
                PLC communication on the electrical grid</p>
        </div>
        <div className="pro_202" data-aos="fade-right"
                    data-aos-duration="3000">
            <ul>
                <li>Point and Point to Multi Point Applications.</li>
                <li>Smart metering and Smart city.</li>
                <li>Utility AMR/AMI Network for Electricity Gas, Water Meters etc.</li>
                <li>Automatic Street Light Control.</li>
                <li>Home Automation Systems</li>
            </ul>
            <img src="./assets/2.png" alt="" />
            
        </div>
        <div className='pics' data-aos="fade-right"
                    data-aos-duration="3000">
                <img src="./assets/1.png" alt="" />
                
                <img src="./assets/3.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}
