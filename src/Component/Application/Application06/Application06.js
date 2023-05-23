import React from 'react'
import './Application06.css'

export default function Application06() {
  return (
    <>
       <div className="smt_st_light">
       <div className="top_bannerA6">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Street Light</h2>
        </div>
        <div className="st_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
          <h1>Smart Street Light</h1>
          <div className="devide"></div>
        </div>
        <div className="st_content" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
          <div className="content_para">
            <img src="./assets/image17.png" alt=""></img>

            <p>
              The controller having feature to control streetlight through
              ambient light, commands, scheduling etc. With these features this
              retrofit street light controller makes streetlight smarter. This
              controller has LoRa module , through which this controller makes
              two-way communication. Gateway will work as a mediator between
              Street light controller and LNS . A user can send command to
              streetlight through which we can mapping with location. We can get
              the energy parameters of streetlight through this controller too
              as it has energy mete for individual energy consumption on light.
            </p>
          </div>
          <p className="txt">
            Smart Street light solution will minimise disruption in service,
            save energy, allow prompt servicing, centralised governance and
            orchestration of streetlights that are spread across cities. This
            solution enables the optimum utilization of street lighting in a
            city over PLCC/RF communication. This solution is an integral part
            of “Smart Cities” and ensures no energy is wasted. Neonax Smart
            street solution has plenty to offer and can be configured as per the
            customer needs the solution
          </p>
        </div>

        <div className="st_content-2" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
          <p>
            Monitoring, Control and Operation of street light. Working with
            Single Phase and Three Phase static energy meter. Low power
            consuming relay for automatic control GSM/GPRS modem for remote
            communication Energy monitoring of Street light at group level wise
            like area wise or zone wise. Addition of Street light using latitude
            / longitude Power quality control of street light Control and
            monitor the actual amount of energy consumed by street-lights
          </p>

          <img src="./assets/image18.jpg" alt=""></img>
        </div>

        <div className="st_content-3" data-aos="flip-right" data-aos-duration="3000">
          <h2>Features of smart street light</h2>
          <ol>
            <div className="list-1">
              <li>
                <p>Fault Street Light analysis</p>
              </li>
              <li>
                <p>Customizable Hierarchy Management</p>
              </li>
              <li>
                <p>Powerful customer insights</p>
              </li>
              <li>
                <p>Cloud Based Remote</p>
              </li>
              <li>
                <p>Monitoring, Control and Operation of streetlight</p>
              </li>
              <li>
                <p>
                  Control and monitor the actual amount of energy <br />
                  consumed by street-light
                </p>
              </li>
            </div>

            <div className="list-2">
              <li>
                <p>Power quality control of streetlight</p>
              </li>
              <li>
                <p>GSM/GPRS modem for remote communication</p>
              </li>
              <li>
                <p>Addition of Street light using latitude / longitude</p>
              </li>
              <li>
                <p>Low power consuming relay for automatic control</p>
              </li>
              <li>
                <p>
                  Working with Single Phase and Three Phase static energy meter
                </p>
              </li>

              <li>
                <p>
                  Energy monitoring of Street light at group level wise like
                  area wise or zone wise
                </p>
              </li>
            </div>
          </ol>
        </div>
      </div>
    </>
  )
}
