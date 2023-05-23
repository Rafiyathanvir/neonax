import React from 'react'
import './Application05.css'

export default function Application05() {
  return (
    <>
      <div className="EnvSensor">
      <div className="top_bannerA5">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Enviromental Sensor</h2>
        </div>
        <div className="ES">
          <div className="ES_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <h1>Smart Environmental Sensor</h1>
            <div className="devide"></div>
          </div>

          <div className="ES_content">
            <ul data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
              <li>
                Air pollution is a disaster that can indirectly interfere with
                human health.
              </li>
              <li>
                One of the types of pollution that threatens public health is
                the increase of CO, NO2 & SO2 level in the air.
              </li>
              <li>
                With the increasing level of air pollution in the city, it
                requires a device that can monitor air pollution in a real time
              </li>
            </ul>

            <div className="ES_content-2" data-aos="zoom-in" data-aos-duration="3000">
              <div className="ES_content-list">
                <img src="./assets/image26.jpg" alt=""></img>
                <ol>
                  <li>Heterogeneous Gas Sensor</li>
                  <li>Humidity Sensor</li>
                  <li> Temp. Sensor</li>
                  <li>Infrared Sensor</li>
                  <li> Dust sensor</li>
                  <li>UV sensor</li>
                </ol>
              </div>
              <div className="sensor">
                <img src="./assets/image25.jpg" alt=''></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
