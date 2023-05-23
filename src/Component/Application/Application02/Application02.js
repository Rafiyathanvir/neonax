import React from 'react'
import "./Application02.css"

export default function Application02() {
  return (
    <>
      <div className="ParkSystem">
      <div className="top_bannerA2">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Parking System</h2>
        </div>
        <div className="PS">
          <div className="PS_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <h1>Smart Parking System</h1>
            <div className="devide"></div>
          </div>

          <div className="PS_content">
            <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/image23.jpg" alt=""></img>
            <div className="para" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
              <p>
                Each parking space is equipped with a battery powered occupancy
                sensor that can detect the absence, arrival, presence, and
                departure of a vehicle. The sensors are self – provisioning with
                a unique MAC address assigned to each unit that is associated
                with its serial number and bar code.
              </p>
              <p>
                The units can run up to 10 years and require no external wiring
                to install. When an occupancy sensor detects vehicle activity
                .Its LoRa network or a node in a LoRaWAN service provider.
              </p>
              <p>
                The gateway forward the packets to SSTPL Parking Cloud Service
                application that can reside on server. This turnkey parking
                management solution uses the sensors messages to keep track of
                open and occupied spaces.
              </p>
            </div>
          </div>

          <div className="PS_content-2" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <table id="PLS">
              <tr>
                <th>PLS Varient</th>
                <th>LoRa Freqencies</th>
                <th>Transmitting Power</th>
              </tr>
              <tr>
                <td>PARK-MOD IN</td>
                <td>865-867 MHz(IN865)</td>
                <td>max.14 dBm ERP</td>
              </tr>
            </table>
            <h3>DEVICE SPECIFICATION</h3>
            <table id="SPECIFIC">
              <tr>
                <th>Reference</th>
                <th>Specification</th>
              </tr>
              <tr>
                <td>Weight</td>
                <td>191g</td>
              </tr>
              <tr>
                <td>Power supply</td>
                <td>Lithium Battery(Li-SoC12, 3.6V, 19000mAh)</td>
              </tr>
              <tr>
                <td>Battery Lifetime </td>
                <td>Up to 5 Years</td>
              </tr>
              <tr>
                <td>IP class</td>
                <td>IP68</td>
              </tr>
            </table>
            <div>
              <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/image24.jpg" alt=""></img>
            </div>
          </div>
          <div className="para2" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <p>
              Wireless sensors detect and report parking space occupancy, thus
              enabling active parking lot management features, such as search,
              navigation, and reservation. The easy retrofit solution for
              parking lots is installed in minutes. It was designed for
              detecting with high reliability if a parking space is occupied or
              available.
            </p>
          </div>
          <div className="PS_content-3" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <h5>TWO DIFFERENT SENSOR PRINCIPLES :</h5>
            <h4>Magnetometer and radar</h4>
            <div className="table_heading">
            <h5>OPERATING CONDITIONS</h5>
            <h4>TARGET MARKETS AND CERTIFICATIONS</h4>
            </div>
            
            <div className="principles">
              <table id="OPERATING">
                <tr>
                  <th>Reference</th>
                  <th>Range</th>
                </tr>
                <tr>
                  <td>Operating temperature range</td>
                  <td>-20……+65℃</td>
                </tr>
                <tr>
                  <td>Humidity range </td>
                  <td>0………95 %</td>
                </tr>
                <tr>
                  <td>Resistant to mechanical </td>
                </tr>
                <tr>
                  <td>Influences2 : snow-plough3, heavy goods </td>
                </tr>
                <tr>
                  <td>vehicles (CV) (N1 – N3)4 and high-pressure cleaning</td>
                </tr>
              </table>
                <div className="vertical"></div>
              <div className="principles-2">
                <table id="OPERATING-2">
                  <tr>
                    <th>Reference</th>
                    <th>.</th>
                  </tr>
                  <tr>
                    <td>PARK-MOD IN</td>
                    <td>India(WPC/ETA)</td>
                  </tr>
                </table>
                <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/image62.jpg" alt=""></img>
              </div>
             </div>
          </div>
        </div>
      </div>

    </>
  )
}
