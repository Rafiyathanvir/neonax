import React from 'react'
import './Application09.css'

export default function Application09() {
  return (
    <>
        <div className="PermiterSystem">
        <div className="top_bannerA9">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Perimeter Security System</h2>
        </div>
          <div className="PSS">
            <div className="PSS_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
              <h1>Perimeter Security System</h1>
              <div className="devide"></div>
            </div>

            {/* Fence Sensor Kits */}
            <div className="PSS_content" data-aos="zoom-in" data-aos-duration="3000">
              <img src="./assets/image27.png" alt=""></img>
            </div>

            <div className="PSS_content-2">
              <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">Fence Sensor Kits</h2>
              <ul data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                <li>
                  Plug & Play installation,Anyone can install the system without
                  prior experience
                </li>
                <li>
                  Economical and affordable technology to cover 100% of the
                  perimeter
                </li>
                <li>
                  No training or special tools required, comes with installation
                  manual
                </li>
                <li>
                  No sophisticated calibration, zone sensitivity easily adjusted
                  with dip switches
                </li>
                <li>Protects fences up 3m high with a single cable</li>
                <li>No maintenance needed</li>
                <li>2x Dry contact relay alarm outputs (No or NC)</li>
                <li>
                  Can be connected to any alarm system/DVR/access control/SCADA
                </li>
              </ul>

              <h4 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">Designed For</h4>

              <div className="fenceKits">
                <div className="fence" data-aos="zoom-in" data-aos-duration="3000">
                  <img src="./assets/image28.jpg" alt=""></img>
                  <div className="overlay">
                    <h3>Welded Mesh, chain link fences</h3>
                  </div>
                </div>
                <div className="fence" data-aos="zoom-in" data-aos-duration="3000">
                  <img src="./assets/image29.jpg" alt=""></img>
                  <div className="overlay">
                    <h3>Rigid Fences, Palisade</h3>
                  </div>
                </div>
                <div className="fence" data-aos="zoom-in" data-aos-duration="3000">
                  <img src="./assets/image30.jpg" alt=""></img>
                  <div className="overlay">
                    <h3>Inner/Outer Wall mount</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Buried &Fiber-Optic solutions */}
            <div className="PSS_content-3">
              <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">Buried & Fiber-Optic Solutions</h2>
              <div className="PSS_points" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
                <ul>
                  <li>4 or 8 Sensors + Analyzer Per System</li>
                  <li>Circular Detection Pattern</li>
                  <li>Completely Invisible System</li>
                  <li>Sensitivity Adjustment Per Sensor</li>
                  <li>Plug & Play Installation- No special tools needed</li>
                  <li>Al Based Detection Algorithm</li>
                  <li>Event Classification - Steps, Vehicle</li>
                  <li>Standalone or IP Network Versions Play</li>
                </ul>

                <ul>
                  <li>Up to 100km per processing unit</li>
                  <li>Sensing standard single mode fiber</li>
                  <li>Distributed Acoustic Sensing (DAS) Technology</li>
                  <li>Within 3m resolution over the entire perimeter</li>
                  <li>Signature based detection</li>
                  <li>Can be used on the fence and underground</li>
                  <li> No electronics or power required on the field</li>
                  <li>IP based Remote control - Software based zones</li>
                </ul>
              </div>
              <h4 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">Designed For</h4>

              <div className="BuriedSol">
                <div className="Buried" data-aos="zoom-in" data-aos-duration="3000">
                  <img src="./assets/image31.jpg" alt=""></img>
                  <div className="overlay1">
                    <h3>Underground Intrusio Detection Sensor </h3>
                  </div>
                </div>
                <div className="Buried" data-aos="zoom-in" data-aos-duration="3000">
                  <img src="./assets/image32.jpg" alt=""></img>
                  <div className="overlay1">
                    <h3>Intelligent fence and ground optic sensor</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
