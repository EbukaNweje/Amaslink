import React, { useState } from 'react'
import "./FAQ.css"
import "./FAQMobile.css"
import { IoAddCircle } from "react-icons/io5";
import Footer from '../Footer/Footer';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
const FAQ = () => {
    const[oneFaq, setOneFaq] =useState(false)
    const[twoFaq, settwoFaq] =useState(false)
    const[threeFaq, setthreeFaq] =useState(false)
    const[fourFaq, setFourFaq] =useState(false)
    const[fiveFaq, setFiveFaq] =useState(false)
    const[sixFaq, setSixFaq] =useState(false)
    const[sevenFaq, setSevenFaq] =useState(false)
    const nav = useNavigate()

    const handleOnefaq = () =>{
        setOneFaq(!oneFaq)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleTwofaq = () =>{
        setOneFaq(false)
        settwoFaq(!twoFaq)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleThreefaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(!threeFaq)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleFourfaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(!fourFaq)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleFivefaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(!fiveFaq)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleSixfaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(!sixFaq)
        setSevenFaq(false)
    }

    const handleSevenfaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(!sevenFaq)
    }


  return (
    <div className='FAQContainer'>
    <Header/>
        <div className='FAQFirstContainer'>

            <div className='FAQFirstContainerRapper'>
            <IoMdArrowRoundBack className='FAQAbxk' onClick={()=>nav('/')}/>
                <h1>All you want to know </h1>
                <p>We provide you the best answer</p>
            </div>
        </div>

        <div className='FAQSecondContainer'>
                <div className='FAQSecondRapper'></div>
                <div className='FAQSecondRapper2'>
                    <h1>FAQ'S</h1>
                    <div className='FAQScontainerDiv'>
                        <div className='FAQSContainerDivRapper'>
                        <p>What happens after i post my ads on Amaslink</p>
                        <IoAddCircle className='FAQADD' onClick={handleOnefaq} />

                        </div>
                        
                        <div className={`FAQSContainerDivRapper2 ${oneFaq ? "" : "active"}`}>
                            <ul>
                            <li>Our moderators will review your ad very carefully and if all the fields are filled out correctly, it will be activated asap we dont want to delay your successful sales.</li>

                            <li>You can find your advert on our website only when it is approved by our moderators.</li>

                            <li>You will get a notification email when your advert is active. If there is something wrong with your advert, you will be notified about that and all the mistakes will be specified so that you can edit your advert correspondingly.</li>

                            <li>After publishing your advert, you can edit it again if needed and repost. Once done, your advert undergoes moderation before being activated on the website.</li>

                            <li>You can delete or close your advert any time you want. You just have to click on Close button placed under the ad or click on the cross placed on the top right corner of the ad.</li>

                            <li>You shouldn’t publish adverts of the same content. They will be considered duplicates by our moderators and won’t go active on the website.</li>

                            <li>You can always manage your ads by logging in to your Amaslink account and clicking on My ADS.</li>
                            
                            </ul>
                    </div>
                        
                        </div>

                    <div className='FAQScontainerDiv'>
                    <div className='FAQSContainerDivRapper'>
                     <p>Are there any rules if i post on Amaslink</p>
                        <IoAddCircle className='FAQADD' onClick={handleTwofaq}/>
                    </div>
                    {
                        twoFaq && <div className='FAQSContainerDivRapper2'>
                        <p>Following rules are required while you are posting ads:</p>
                        <ul>
                            <li>Every advert must have a precise title.</li>

                            <li>Every advert should contain only unique images (taken by the seller and not downloaded from the Internet) without any contact information or watermarks.</li>

                            <li>Make sure you chose an appropriate category. Be attentive choosing a category for a job proposal and/or a resume.</li>

                            <li>The prices of your items must correspond to the real prices of similar products.</li>

                            <li>All posted products and/or services must be real.</li>

                            <li>All items and products must be legally permitted.</li>

                            <li>Each item for sale must be posted separately. You cannot post several products within one and the same advert.</li>

                            <li>Every advert must contain a brief and clear description.</li>

                            <li>If you have any website you wish to add to an Ads, Please Kindly Use the Brand and Business section.</li> 
                        </ul>
                    </div> 
                    }
                    
                    </div>

                    <div className='FAQScontainerDiv'>
                    <div className='FAQSContainerDivRapper'>
                    <p>What are the prohibited items on Amaslink</p>
                     <IoAddCircle className='FAQADD'  onClick={handleThreefaq}/>
                    </div>
                  {
                    threeFaq  &&
                    <div className='FAQSContainerDivRapper2'>
                    <p>Please, take a moment to review the items which are not allowed to be advertised here:</p>

                    <ul>
                        <li>Narcotics, steroids, and any drugs or medications that require a prescription from a licensed medical specialist</li>

                        <li>Weapons.</li>

                        <li>Restricted military/police items.</li>

                        <li>Human organs.</li>

                        <li>Illegal/pirated copies.</li>

                        <li>Stolen property.</li>

                        <li>Code grabbing and lock picking devices.</li>

                        <li>Electronic equipment prohibited by the law.</li>

                        <li>Sexually-oriented services.</li>

                        <li>Multi-level marketing, pyramid, and matrix programs.</li>

                        <li>Network marketing and “Home Base Business” jobs.</li>

                        <li>Products (offers or services) prohibited to sell by the law.</li>

                        <li>Food and healthcare items should have a clearly marked expiration or ‘use by’ date.</li>

                        <li>Ads can’t contain pictures of nudity.</li>
                    </ul>
                </div>
                    
                  }
                    </div>

                    <div className='FAQScontainerDiv'>
                    <div className='FAQSContainerDivRapper'>
                        <p>Why has my add put on hold/rejected</p>
                        <IoAddCircle className='FAQADD' onClick={handleFourfaq}/>
                    </div>
                    {
                        fourFaq &&
                        <div className='FAQSContainerDivRapper2'>
                        <p>here are several reasons why your ad can be placed on hold by our moderators:</p>
                        <ul>
                            <li>You tried to post several items within one ad. It is not allowed to do that. Each item for sale must be posted separately, one ad – one product. Please follow this simple rule so that your ad is activated shortly.</li>

                            <li>Pictures you’ve uploaded contain contact numbers. We do not allow posting this kind of photos. Please add pics which don’t have any phone numbers for your ads to go active.</li>

                            <li>There are certain restrictions concerning prices users might set. Please, input an appropriate price for your advert to be approved. If the price is not relevant, it may be declined. Make sure to carry out some investigation of a market value of an item you intend to sell.</li>
                        </ul>
                    </div>
                    }
                   
                    </div>

                    <div className='FAQScontainerDiv'>
                    <div className='FAQSContainerDivRapper'>
                        <p>Any tips to posting successful ads on Amaslink</p>
                        <IoAddCircle className='FAQADD' onClick={handleFivefaq}/>
                    </div>
                    {
                        fiveFaq &&
                        <div className='FAQSContainerDivRapper2'>
                        <p>If you really want to create a great ad, it is highly recommended to follow the instructions below:</p>

                        <ul>
                            <li>Use a clear title which includes the name of the item you sell. Try to make your title appealing and eye-catching.</li>

                            <li>Set an appropriate price for your item so that the advert is approved. If the price is not relevant, it may be declined. Make sure to carry out some investigation of the prices for a particular item.</li>

                            <li>Upload only unique and high-quality photos of your items taken by yourself and not downloaded from the Internet. The better photos you add, the more attractive your ad looks to the potential buyers and the more calls you receive.</li>

                            <li>Indicate correct contact details for the potential buyers/clients to be able to reach you easily. Try to respond all the incoming calls or to call back your customers once available.</li>

                            <li>Try to fill out all the fields of your profile page, as well as those of your advert, to let your customers dispose of all the necessary information about you as a seller and the products you sell.</li>

                            <li>The better rating you have on our website, the more chances you get to attract a lot of buyers. Remember that it is important to build trust in your business. Your rating depends on the number of positive/negative feedback received from your previous customers.</li>

                            <li>
                            Make your advert as risk-free as possible. Underline that no prepayments are required and be ready to list those delivery services which presuppose payment on the delivery of the product ordered.</li>
                        </ul>
                    </div>
                    }
                    </div>

                    <div className='FAQScontainerDiv'>
                    <div className='FAQSContainerDivRapper'>
                        <p>I am already on free plan why should subscribe on premium package</p>
                        <IoAddCircle className='FAQADD' onClick={handleSixfaq}/>
                    </div>
                   {
                    sixFaq &&
                    <div className='FAQSContainerDivRapper2'>
                    <ul>
                        <li>Our Premium services are meant for sellers of any kind, but mostly for professional sellers/companies. They allow sellers to promote their ads actively and sell their products fast by getting up to 15 times more clients.</li>
                    </ul>
                </div>
                   }
                    </div>

                    <div className='FAQScontainerDiv'>
                    <div className='FAQSContainerDivRapper'>
                        <p>What are the major benefit for premium package</p>
                        <IoAddCircle className='FAQADD' onClick={handleSevenfaq}/>
                    </div>
                   {
                    sevenFaq &&
                    <div className='FAQSContainerDivRapper2'>
                    <p>You will need a good promotion for your ads for faster sales and customer out.
                       Below you can find 6 main benefits of our Premium Services:</p>
                       
                       <ul>
                        <li>largest Classified marketplace Yes, we are proud of the fact that Amaslink is the biggest marketplace by the number of visitors and ads posted.</li>

                        <li>More clients than others. We get our visitors only from relevant sources like Google and Facebook.</li>

                        <li>Relevant promotion algorithms. We promote your ads only to those users who could be interested in your products. That gives you the biggest number of real clients.</li>

                        <li>Personal Support. We have a dedicated support team who understand your needs very well and ensure customer satisfaction.
                        </li>

                        <li>Fair price for the services you get. We charge you fairly, so you won’t pay any extra commissions.</li>
                        
                        <li>We are secured. We use secure gateways of European banks, so all transactions are 100% secure.</li>
                       </ul>

                </div>
                   }
                    </div>
                </div>
        </div>
            <div className='FAQLastContainer'>
                <div className='FAQLastContainerrapper'>
                <h2>How to post Ads</h2>

                <ul>
                    <li>Click on <span>post Ad For free</span></li>

                    <li>You will be immediately redirected to our Login page (if you are not a registered user). You will have to fill out all the required fields and click on ‘Register’ button at the bottom of the page.</li>

                    <li>After Registering, Complete all the required information about your item.</li>

                    <li>After filling out the required fields, click on “Post” button.</li>

                    <li>Once you post your ad Your advert will be published shortly once moderation process is completed.</li>

                    <li>Once your advert is live, you will receive a notification email.</li>

                    <li>Be ready to receive numerous incoming calls from your potential buyers. Good luck with your sales!</li>

                    <li>You can have a look at our premium packages also for more sales and boost packages!</li>
                </ul>
                </div>
            </div>

                   <Footer/>
    </div>
  )
}

export default FAQ