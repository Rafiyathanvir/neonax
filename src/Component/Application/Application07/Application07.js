import React from 'react'
import './Application07.css'

export default function Application07() {
  return (
    <>
      <div className="trash_bin">
      <div className="top_bannerA7">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Trash Bin</h2>
        </div>
        <div className="tb_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
          <h1>Smart Trash Bin</h1>
          <div className="devide"></div>
        </div>

        <div className="tb_content">
          <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/image20.jpg" alt=""></img>
          <ul data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <li>
              LoRa-based LPWAN vehicle to vehicle communication system for smart
              dustbin
            </li>
            <li>
              The vehicle-to-vehicle communication system consists of a LoRa
              gateway, a remote diagnostic system, sensors for monitoring the
              garbage quantity and a cloud platform.
            </li>
            <li>
              When bin is filled with garbage, then the sensors which keep track
              on the garbage level will sense the overflow of the bin.
            </li>
          </ul>
        </div>
        <div className="tb_content-2">
          <ul data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <li>
              Once the sensor detects that the bin is full and needs to cleared
              it notifies.
            </li>
            <li>
              The LoRa gateway transmits the information about the garbage bin
              data to other nearby vehicle which is a smart dustbin by recording
              this information in the cloud platform .
            </li>
            <li>The dustbin can communicate with another dustbin.</li>
          </ul>
          <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/image21.jpg" alt=""></img>
        </div>
      </div>
    </>
  )
}
