import React from 'react'
import './Checkout.css'
import './CheckoutMobile.css'
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { ImPaypal } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { FaRegWindowMinimize } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
import Viewed from '../Viewed/Viewed';
import Header from '../Header/Header';
import Recommended from '../Recommended/Recommend';
import Footer from '../Footer/Footer';


const Checkout = () => {
  return (
    <div className='CheckoutReview'>
    <Header/>
        <div className='CheckoutInnerRapper'>   
        <div className='CheckoutReviewContainerinner'>

            <div className='CheckoutContainerRapper1'>
                <h3>Payment Method</h3>
                <div className='CheckoutType'>
                    <div className='CheckoutCard'>
                    <MdOutlineRadioButtonChecked className='CheckoutIcons1'/>
                    <BsCashCoin className='checkoutIcons2'/>
                    </div>

                    <div className='checkoutPaypal'>
                    <MdRadioButtonUnchecked className='CheckoutIcons1'/>
                    <div className='CheckoutPaypalDisplay'>
                    <ImPaypal className='checkoutIcons3'/>
                    <h4>PayPal</h4>
                    </div>
                    </div>
                </div>

                <div className='CheckoutContainerTwo'>
                        <p>Payment Details</p>
                        <div className='CheckoutContainerinsiderapper'>
                            <input type="text"  className='CheckoutInputdiv1' placeholder='Enter Name'/>
                            <input type="text"  className='CheckoutInputdiv2'placeholder='Card Number'/>
                            <div className='CheckOutInputContainerRapper'>
                                <input type="text"  className='CheckoutInputdiv3'placeholder='Expiration'/>
                                <input type="text"  className='CheckoutInputdiv4'placeholder='CVV Code'/>
                            </div>
                        </div>
                        <p className='CheckoutpTag'>By Clicking “Confirm payment” <br/>i agree to the Compaines terms and condition</p>
                </div>

                <div className='CheckoutButtonContainer'>
                    <button className='CheckoutButtonTag1'>Back</button>
                    <button className='CheckoutButtonTag2'>Confirm Payment</button>
                </div>

            </div>


            <div className='CheckoutContainerRapper2'>
                <div className='CheckoutContainerRapper2inner'>
                    <h3>Your Product</h3>

                    <div className='CheckOutItemsListed'>
                        <div className='Checkoutlistinside1'>

                            <div className='CheckoutProduct'></div>
                            <div className='CheckoutProductInfo'>
                                <h4>SAMSUNG</h4>
                                <p className='ptageCheckout'>Samsung A14</p>
                                <p className='ptageCheckout'>Colour : ASH</p>
                            </div>
                                
                        </div>

                        <div className='checkoutlistinside2'>
                            <div className='CheckoutnumberHolder'>
                            <h4 className='CheckoutIconsAdd'>-</h4>
                            <h4>4</h4>
                            <h4 className='CheckoutIconsAdd'>+</h4>
                            </div>

                            <div className='CheckoutAmount'>
                            <h5>$500</h5>
                            </div>
                        </div>

                        <div className='CheckoutListinside3'>
                        <MdDelete className='CheckoutDelete'/>
                        </div>
                    </div>
                    
                    
                    <div className='CheckOutItemsListed'>
                        <div className='Checkoutlistinside1'>

                            <div className='CheckoutProduct'></div>
                            <div className='CheckoutProductInfo'>
                                <h4>SAMSUNG</h4>
                                <p className='ptageCheckout'>Samsung A14</p>
                                <p className='ptageCheckout'>Colour : ASH</p>
                            </div>
                                
                        </div>

                        <div className='checkoutlistinside2'>
                            <div className='CheckoutnumberHolder'>
                            <h4 className='CheckoutIconsAdd'>-</h4>
                            <h4>4</h4>
                            <h4 className='CheckoutIconsAdd'>+</h4>
                            </div>

                            <div className='CheckoutAmount'>
                            <h5>$500</h5>
                            </div>
                        </div>

                        <div className='CheckoutListinside3'>
                        <MdDelete className='CheckoutDelete'/>
                        </div>
                    </div>

                    
                    <div className='CheckOutItemsListed'>
                        <div className='Checkoutlistinside1'>

                            <div className='CheckoutProduct'></div>
                            <div className='CheckoutProductInfo'>
                                <h4>SAMSUNG</h4>
                                <p className='ptageCheckout'>Samsung A14</p>
                                <p className='ptageCheckout'>Colour : ASH</p>
                            </div>
                                
                        </div>

                        <div className='checkoutlistinside2'>
                            <div className='CheckoutnumberHolder'>
                            <h4 className='CheckoutIconsAdd'>-</h4>
                            <h4>4</h4>
                            <h4 className='CheckoutIconsAdd'>+</h4>
                            </div>

                            <div className='CheckoutAmount'>
                            <h5>$500</h5>
                            </div>
                        </div>

                        <div className='CheckoutListinside3'>
                        <MdDelete className='CheckoutDelete'/>
                        </div>
                    </div>

                    
                    <div className='CheckOutItemsListed'>
                        <div className='Checkoutlistinside1'>

                            <div className='CheckoutProduct'></div>
                            <div className='CheckoutProductInfo'>
                                <h4>SAMSUNG</h4>
                                <p className='ptageCheckout'>Samsung A14</p>
                                <p className='ptageCheckout'>Colour : ASH</p>
                            </div>
                                
                        </div>

                        <div className='checkoutlistinside2'>
                            <div className='CheckoutnumberHolder'>
                            <h4 className='CheckoutIconsAdd'>-</h4>
                            <h4>4</h4>
                            <h4 className='CheckoutIconsAdd'>+</h4>
                            </div>

                            <div className='CheckoutAmount'>
                            <h5>$500</h5>
                            </div>
                        </div>

                        <div className='CheckoutListinside3'>
                        <MdDelete className='CheckoutDelete'/>
                        </div>
                    </div>

                    
                    <div className='CheckOutItemsListed'>
                        <div className='Checkoutlistinside1'>

                            <div className='CheckoutProduct'></div>
                            <div className='CheckoutProductInfo'>
                                <h4>SAMSUNG</h4>
                                <p className='ptageCheckout'>Samsung A14</p>
                                <p className='ptageCheckout'>Colour : ASH</p>
                            </div>
                                
                        </div>

                        <div className='checkoutlistinside2'>
                            <div className='CheckoutnumberHolder'>
                            <h4 className='CheckoutIconsAdd'>-</h4>
                            <h4>4</h4>
                            <h4 className='CheckoutIconsAdd'>+</h4>
                            </div>

                            <div className='CheckoutAmount'>
                            <h5>$500</h5>
                            </div>
                        </div>

                        <div className='CheckoutListinside3'>
                        <MdDelete className='CheckoutDelete'/>
                        </div>
                    </div>


                    <div className='CheckoutTotalCalculation'>
                        <div className='CheckoutTotalCalculationInner'>
                            <h4>Total</h4>
                            <h3>$4000</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
            <Viewed/>
            <Recommended/>
        </div>
            <Footer/>
    </div>
  )
}

export default Checkout