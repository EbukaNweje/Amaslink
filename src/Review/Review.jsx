import React from 'react'
import './Review.css'
import './ReviewMobile.css'
import Header from '../Header/Header'
import { IoStarSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Viewed from '../Viewed/Viewed';
import Footer from '../Footer/Footer';


const Review = () => {
  return (
    <div className='ReviewContainer'>

    <div className='HeaderReviewRapper'>
       <Header/>
    </div>

       <div className='ReviewInnerContainer'>

        <div className='ReviewRapperContainer'>

            <div className='ReviewRapperInnerContainer'>
                <div className='ReviewItemContainers1'>
                    <div className='ReviewItemContainerInnerScrole'>
                        <div className='ReviewItemContainerInnerScroleRapper'>
                            <div className='ReviewItemsContainewrList'></div>
                            <div className='ReviewItemsContainewrList'></div>
                            <div className='ReviewItemsContainewrList2'></div>
                            <div className='ReviewItemsContainewrList'></div>
                            <div className='ReviewItemsContainewrList'></div>
                            <div className='ReviewItemsContainewrList'></div>
                        </div>
                    </div>
                   
                </div>

                <div className='ReviewItemContainers2'></div>

                <div className='ReviewItemContainers3'>

                    <div className='ReviewItemsDetails1'>
                        <h2>Apple Watch A12</h2>

                        <div className='ReviewStar'>
                        <div className='ReviewStarRapper'>
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        </div>
                       
                       <p> (190 verified rating) </p>
                        </div>

                        <div className='ReviewBrandDeatils'>
                       <p> Brand:</p> <FaApple className='ReviewApple'/> <h6>Apple</h6>
                        </div>
                    </div>

                    <div className='ReviewItemsDetails2'>
                        <div className='ReviewitemsDetailsRapper'>
                            <h1>$210</h1>
                            <p>230</p>
                            <button className='Reviewpec'>- 20</button>
                        </div>

                            <p>
                                Open the doors of your living room to a full multimedia experience
                                With high definition multimedia inputs, interface (HDMI) with high definition multimedia inputs, interface (HDMI), the 32 "HD TV will turn your living room into a true multimedia entertainment center. HDMI technology enables high-speed  data transmission directly to your TV from a wide variety of devices.A design that arouses maximum interest
                            </p>


                    </div>

                    <div className='ReviewItemsDetails3'>
                        <div className='ReviewitemsDetailsUp'>
                            <div className='ReviewColorDivs'>
                                <p>Color</p>
                                <div className='ReviewColordivMain'>
                                    <div className='ReviewColors1'></div>
                                    <div className='ReviewColors2'></div>
                                    <div className='ReviewColors3'></div>
                                    <div className='ReviewColors4'></div>
                                </div>
                            </div>

                            <div className='ReviewSizeConatiner'>
                            <p>Size</p>
                                <div className='ReviewSizedivMain'>
                                    <div className='ReviewSize1'>S</div>
                                    <div className='ReviewSize1'>M</div>
                                    <div className='ReviewSize1'>L</div>
                                    <div className='ReviewSize1'>XL</div>
                                    <div className='ReviewSize1'>XXL</div>
                                </div>
                            </div>
                        </div>

                        <div className='ReviewitemsDetailsDown'>
                            <div className='ReviewAddChart1'>
                                <p>QTY</p>
                                <div className='ReviewQTYContainer'>
                                    <div className='ReviewQtyNumber'>23</div>
                                    <div className='ReviewQTYNumberContainer'> 
                                    <div className='ReviewQTYAdd'>+</div>
                                    <div className='ReviewQTYMin'>-</div>
                                    </div>
                                </div>
                            </div>

                            <div className='ReviewAddChart2'>
                                <button className='ReviewADDTOCART'>ADD TO CART</button>
                            </div>

                            <div className='ReviewAddChart3'>
                                <CiBookmarkPlus className='ReviewBookMark'/>
                                <p>Add to Favourite</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ReviewContainerTwo'>

                <div className='ReviewCoustomerDeatails1'>
                    <h2>Verified Customer Feedback</h2>
                    <div className='ReviewSeeAll'>
                    <h3>SEE ALL </h3>
                    <IoIosArrowForward className='Forwward'/>
                    </div>
                    
                </div>

                <div className='ReviewCoustomerDeatails2'>
                    <div className='reviewAndrating1'>
                        <h3>VERIFIED RATINGS (190)</h3>

                        <div className='ReviewBoxcenter'>
                            <h1>4.2/5</h1>
                            <div className='ReviewStarssNumber'>
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                        </div>
                        <p>190 verified ratings</p>
                        </div>

                        <div className='ReviewNumbersIn'>
                        <div className='ReviewRapperLoading'>

                            <div className='ReviewLoadingStars'>
                                <p>5</p>
                                <IoStarSharp className="HomeStar1" />
                                <p>(100)</p>
                            </div>

                            <div className='ReviewLoadingStars'>
                            <p>4</p>
                            <IoStarSharp className="HomeStar1" />
                            <p>(59)</p>

                            </div>

                            <div className='ReviewLoadingStars'>
                            <p>3</p>
                            <IoStarSharp className="HomeStar1" />
                            <p>(30)</p>
            

                            </div>

                            <div className='ReviewLoadingStars'>
                            <p>2</p>
                            <IoStarSharp className="HomeStar1" />
                            <p>(10)</p>

                            </div>

                            <div className='ReviewLoadingStars'>
                            <p>1</p>
                            <IoStarSharp className="HomeStar1" />
                            <p>(13)</p>
                       
                            </div>

                        </div>

                        <div className='ReviewLineLoadColor'>
                                <div className='InnerColorLine'>
                                    <div className='InnerColorLineLoad1'></div>
                                </div>
                                <div className='InnerColorLine'>
                                    <div className='InnerColorLineLoad2'></div>
                                </div>
                                <div className='InnerColorLine'>
                                    <div className='InnerColorLineLoad3'></div>
                                </div>
                                <div className='InnerColorLine'>
                                    <div className='InnerColorLineLoad4'></div>
                                </div>
                                <div className='InnerColorLine'>
                                    <div className='InnerColorLineLoad5'></div>
                                </div>
                        </div>
                    </div>
                    </div>



                    <div className='ReviewAndRating2'>
                        <h4>COMMENT FROM VERIFED PURCHASE (78)</h4>

                        <div className='ReviewCommentSection'>
                        <div className='ReviewStarssNumber'>
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                        </div>
                            <h3>5 Star</h3>
                            <p>Compare to the Price Outside this is amazing</p>

                            <div className='ReviewCommentDiv'>
                                <p>15-11-2024 by joseph</p>
                                <div className='ReviewcomentVerified'>
                                <MdOutlineVerifiedUser />
                                    <p>Verified Purchase</p>
                                </div>
                            </div>
                        </div>

                        <div className='ReviewCommentSection'>
                        <div className='ReviewStarssNumber'>
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                        </div>
                            <h3>5 Star</h3>
                            <p>Compare to the Price Outside this is amazing</p>

                            <div className='ReviewCommentDiv'>
                                <p>15-11-2024 by joseph</p>
                                <div className='ReviewcomentVerified'>
                                <MdOutlineVerifiedUser />
                                    <p>Verified Purchase</p>
                                </div>
                            </div>
                        </div>

                        <div className='ReviewCommentSection'>
                        <div className='ReviewStarssNumber'>
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                            <IoStarSharp className="HomeStar1" />
                        </div>
                            <h3>5 Star</h3>
                            <p>Compare to the Price Outside this is amazing</p>

                            <div className='ReviewCommentDiv'>
                                <p>15-11-2024 by joseph</p>
                                <div className='ReviewcomentVerified'>
                                <MdOutlineVerifiedUser />
                                    <p>Verified Purchase</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className='ReviewViewedMarket'>
                <Viewed/>
            </div>
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Review