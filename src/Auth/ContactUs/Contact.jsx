import React from 'react'
import "./Contact.css"
import "./ContactMobile.css"
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';

const Contact = () => {
    const nav = useNavigate()
  return (
    <div className='ContactContainer'>
    <Header/>
        <div className='ContactusImage'>
            <div className='ConatctusimageCover'>
                <div className='ContactLogo'>
                    {/* <div className='ContactLogoInside' onClick={()=>nav('/')}></div> */}
                </div>
                <div className='ContactLogoText'>
                    <h1>CONTACT US</h1>
                    <p>Home / Contact</p>
                </div>
            </div>
        </div>

        <div className='ContactSecondDiv'>
            <div className='ContactHolder'>
                <div className='ContactSecondinsideDivs2'>
                    <div className='ContactRapper'>
                    <IoMdCall  className='ContactIcons'/>
                    <h5>Call us</h5>
                    </div>
                    <h5>+479471632</h5>
                </div>

                <div className='ContactSecondinsideDivs'>
                <div className='ContactRapper'>
                <MdOutlineEmail  className='ContactIcons'/>
                <h5>Email</h5>
                </div>
                <h5>Support@Amaslink.com</h5>
                </div>

                <div className='ContactSecondinsideDivs2'>
                <div className='ContactRapper'>
                <IoLocationOutline  className='ContactIcons'/>
                <h5>Location</h5>
                </div>
                <h5>Kristiansand Norway</h5>
                </div>
                </div>
        </div>

        <div className='ContactThirdContainer'>
            <div className='ContactThirdContainerinside'>
               
                <div className='ContactThirdContainerRapper'>
                <h1>Get in Touch</h1>
                    <input type="text" placeholder='Enter your Name' className='ContactThirdrapperinput'/>
                    <input type="text" placeholder='Email Address' className='ContactThirdrapperinput'/>
                    <input type="message" placeholder='Message' className='ConatctThirdRapperMessage'/>
                </div>
                <div className='ContactUsImageip'></div>
            </div>
          
        </div>
        <div className='ContactFouthContainer'>
                <button>Submit</button>
                <div className='ContactThirdSubmit'>
                <FaTwitter />
                <CiFacebook />
                <FaInstagram /> 
                </div>
            </div>

            <Footer/>
    </div>
  )
}

export default Contact