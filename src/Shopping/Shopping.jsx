import React, { useState } from 'react'
import './Shopping.css'
import './ShoppingMobile.css'
import Header from '../Header/Header'
import { CiSearch } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa";
import NewListing from '../NewListing/NewListing';
import ImageData from '../ImageData.json'
import { IoStarSharp } from "react-icons/io5";
import Footer from '../Footer/Footer';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Shopping = () => {
  const [category,setCategory] = useState (false)
  const [CategoryImage, setcategoryImage]=useState("Shoe")

  return (
    <div className='ShoppingPageContainer'>
        <Header/>
        <div className='ShoopingPagerapper'>
              <p>Best way to find your items</p>
              <h1>Enjoy Your best Shopping Experience</h1>
        </div>

             <div className='ShoppingSearchRapperContainer'>

              <div className='ShoppingSearchItems'>

              <div className='ShoppingsearchTagContainer'>
              <CiSearch  className='SearchIconShopping'/>
                  <input type='test' placeholder='items' className='Shoppingtag'/>
              </div>

              <div className='ShoppingsearchTagContainer3'>
                <p>Featured</p>
                <FaSortDown  className='ShoppingDownIcons' onClick={() => setCategory(!category)}/>

                <div className={`ShoppingULLIControler ${category ? "active" : ""}`}>
                <ul>
                  <li>Popularity</li>
                  <li>NewListing</li>
                  <li>Low to Price</li>
                  <li>High to Price</li>
                </ul>
                </div>
              </div>

              </div>
            </div>


        <div className='ShoppingUliContainer'>
        <div className='ShoppingULLIControler2'>
                  <ul>
                    <li className='last'>Shoe</li>
                    <li className='last'>Games</li>
                    <li className='last'>Cars</li>
                    <li className='last'>Pets</li>
                    <li className='last'>Books</li>
                    <li className='last'>Land</li>
                    <li className='last'>Cloths</li>
                    <li className='last'>Television</li>
                    <li className='last'>Phone</li>
                    <li className='last'>Laptop</li>
                    <li className='last'>House</li>
                    <li className='last2'>Chairs</li>
                  </ul>
               </div>
        </div>

        <div className='ShoppingSecondContainer'>
          <div className='ShoppingSecondContainerRapper'>
            <NewListing/>

                
        <div className="HomeItemsTypeContainer">
        <div className="HomeItemsTypeRapper">
         {CategoryImage &&
         ImageData.filter((Image) =>Image.category === CategoryImage).map((Image)=>(
          <div key={Image.id} className="HomeItems" onClick={()=>nav('/review')}>
              <div className="HomeitemsImage"> <img src={Image.imageUrl}  alt="" className="HomeImagetage"/></div>
              <div className="Homeitemsdeatils">
              
                   <div className="StarsContainer">
                   <div>
                   <IoStarSharp className="HomeStar" />
                      <IoStarSharp className="HomeStar" />
                      <IoStarSharp className="HomeStar" />
                      <IoStarSharp className="HomeStar" />
                      <IoStarSharp className="HomeStar" />
                   </div>

                   <div>
                    <p style={{fontSize: "10px"}}>45k</p>
                   </div>
                     
                    </div>
                    
                <div className="HomeItmsName">
                  <h4 className="HomeCatrH4">{Image.description}</h4>
                  <p style={{fontSize:"8px"}}>Mercedes-Benz Self-Charging Hybrid Car Find.....</p>
                </div>
  
                <div className="HomeitmesPrice">
                  <h5>$6000</h5>
                  <p>$6000</p>
                 
                </div>
              </div>
            </div>
         ))}
      
        </div>
        </div>

      
        <div className="HomeNumbers">
        <div className="HomeNumberrapper">
          <button className="HomeButtonNumber"><IoIosArrowBack /></button>
          <button className="HomeButtonNumber">1</button>
          <button className="HomeButtonNumber">2</button>
          <button className="HomeButtonNumber">3</button>
          <button className="HomeButtonNumber">4</button>
          <button className="HomeButtonNumber">5</button>
          <button className="HomeButtonNumber">6</button>
          <button className="HomeButtonNumber">7</button>
          <button className="HomeButtonNumber"> <IoIosArrowForward /></button>
        </div>
      </div>
         </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Shopping