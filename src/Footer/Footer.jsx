import React, { useRef } from 'react'
import "./Footer.css"
import "./FooterMobile.css"
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='FooterContainer'>
        <div className='FooterUp'>
            <div className='FooterSocialMediaLink'>
                <div className='FooterLogo'></div>
                <div className='FooterLogoSocailMedia'>
                <FaTwitter />
                <CiFacebook />
                <FaInstagram /> 
                </div>
            </div>

            <div className='FooterContactUs'>
                <ul>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Customer care</li>
                    <li>Service</li>
                </ul>
            </div>

            <div className='FooterSubScribeFooter'>
                <h4>Subscribe to our news</h4>

                <div className='FooterSubscribeFooter'>
                    <input type="text" placeholder='Enter your Email' className='FooterSubscribetag'/>
                    <button className='FooterButtonSend'>Send</button>
                </div>
            </div>
        </div>

        <div className='FooterDown'>
            <p>WWW.AMASLINK.COM</p>
        </div>
    </div>
  )
})

export default Footer