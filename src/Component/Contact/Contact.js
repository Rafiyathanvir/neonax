import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
        <div className="top_banner002">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Contact Us </h2>
        </div>
      <div className='s'>
      <div className="left_box" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
        <div className="locat">
            <img src="./assets/location.png" alt="" />
            <p>DSO-DDP-A5-D-FXD-1060 <br/>
            Dubai Digital Park - Office A5- Dtec <br />
            Dubai Silicon Oasis, UAE</p>
        </div>
        <div className="phone">
            <img src="./assets/phone.png" alt="" />
             <p>+971564323436
             </p>
        </div>
        <div className="mail">
            <img src="./assets/mail.png" alt="" />
            <p>enquiry@neonax.com </p>
        </div>
      </div>

      <div className="form_container" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
        <h1>Get In Touch</h1>
        <p>For any queries please don't hesitate to contact us.we are always ready to help you with the queries.</p>
         <form>
            <input className='name' type="text" placeholder='Name' />
            <div className="name2">
            <input type="mail" placeholder='Mail' />
            <input className='name4' type="text" placeholder='Phone'/>
            </div>
            <textarea className='message'  placeholder='Message'></textarea>
            <button >SEND MESSAGE</button>
         </form>
      </div>
    </div>
    <div className="map" >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4656575832287!2d55.375312314960155!3d25.119943183932183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f650a2af6c8a7%3A0xc02ce9d302b324e!2sNeonax%20FZCO!5e0!3m2!1sen!2sin!4v1678959712815!5m2!1sen!2sin" title='map'></iframe>
    </div>
    </>
  )
}
