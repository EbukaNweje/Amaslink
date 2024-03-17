import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import "./HomeMobile.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import Footer from "../Footer/Footer";
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Carousel from "../Carousel";
import { useNavigate } from "react-router-dom";
import ImageData from '../ImageData.json'
import CaroselTwo from "../CarouselTwo/CaroselTwo";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import NewListing from "../NewListing/NewListing";;


const Home = () => {
  const [CategoryImage, setcategoryImage]=useState("Shoe")

  useEffect(() => {
    handleCategoryList('Shoe');
  }, []);

  const handleCategoryList =(category)=>{
    setcategoryImage(category)
  }
    const nav = useNavigate()
    const[menu, setMenu] = useState(true)

    const handleMenu = ()=>{
        setMenu(!menu)
    }

    const categoryListRef = useRef(null);
    const footerRef = useRef(null);
    const listingRef = useRef(null);

    const handleFooterClick = () => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };

    
    const handleFooterClickTwo = () => {
      if (categoryListRef.current) {
        categoryListRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };

       
    const handleFooterClickThree = () => {
      if (listingRef.current) {
        listingRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };
  return (
    <div className="HomeContainer">
      <div className="HomeHeader">
        <div className="HomeHeaderRapper">
          <div className="HomeHeaderBox1"></div>

          <div className="HomeHeaderBox2">
            <ul className="HomeHeaderbox2ul">
              <li className="HomeliTag" onClick={handleFooterClick}>Footer</li>
              <li className="HomeliTag"onClick={()=>nav('/faq')}>FAQ</li>

              <li className="HomeliTag" onClick={()=>nav('/contact') }>Contact</li>
              <li className="HomeliTag" onClick={handleFooterClickTwo}>Category</li>
              <li className="HomeliTag" onClick={handleFooterClickThree} >Listing</li>
            </ul>
          </div>

          <div className="HomeHeaderBox3">
            <button className="HomeButtonLogin"onClick={()=>nav('/login')}>LOGIN</button>
            <button className="HomeButtonRegister"onClick={()=>nav('/signup')}>REGISTER</button>
          </div>
        </div>

        <IoMdMenu className="Homemenu" onClick={handleMenu}/>
      </div>

     {
        menu ? (
            <div className="HomeMenuClick">
            <div className="HomeCancleicon">
            <GiCancel className="HomeCancle" onClick={handleMenu}/>
            </div>
        <div className="LoginandSignup">
            <button className="Register">Register</button>
            <button className="Login">Login</button>
        </div>
            <div className="HomeLoginDropdown">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
          </div>
        ):null
     }

      <Carousel/>

      <div className="HomeHolderRapperAll">
      <div className="HomeHolderRapperAllInner">
      <div className="HomeCategory">
        <div className="HomeCategoryrapper">
          <div className="HomeCategorydivs1">Category</div>
          <div className="HomeCategorydivs2" onClick={()=>nav('/Upload')}>
            <IoIosAddCircleOutline className="HomepostAdd" />
            <h3 className="Homecategoryh3">Post Ads for free</h3>
          </div>
        </div>

        <div className="HomeCategoryList" ref={categoryListRef}>
        <div className="HomecateDivrapper">

        <div className="HomeCategoryListRapper">
        
          <div className="HomeCategoryListItems1" onClick={()=> handleCategoryList('Shoe')}>Shoes</div>
          
          <div className="HomeCategoryListItems2" onClick={()=> handleCategoryList('Games')}>Games</div>

          <div className="HomeCategoryListItems3" onClick={()=> handleCategoryList('Car')}>Cars</div>

          <div className="HomeCategoryListItems4" onClick={()=> handleCategoryList('Pet')}>Pets</div>

          <div className="HomeCategoryListItems5" onClick={()=> handleCategoryList('Books')}>Books</div>

          <div className="HomeCategoryListItems6" onClick={()=> handleCategoryList('Cloth')}>Cloths</div>

          <div className="HomeCategoryListItems7" onClick={()=> handleCategoryList('')}>Land</div>

          <div className="HomeCategoryListItems8" onClick={()=> handleCategoryList('')}>Television</div>

          <div className="HomeCategoryListItems9" onClick={()=> handleCategoryList('Phone')}>Phone</div>

          <div className="HomeCategoryListItems10" onClick={()=> handleCategoryList('Laptop')}>Laptop</div>

          <div className="HomeCategoryListItems11" onClick={()=> handleCategoryList('Chair')}>Chairs</div>

          <div className="HomeCategoryListItems12" onClick={()=> handleCategoryList('House')}>House</div>
        </div>
        </div>
        </div>
      </div>

    <CaroselTwo/>
    
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

          <NewListing ref={listingRef}/>

      <div className="HomesendEmailContainer">
        <div className="HomesendEmailText">
          <h4>Subscribe for our newsletter</h4>
          <p>
            Subscribe to our mailing list to get the latest straight in your
            inbox
          </p>
        </div>

        <div className="HomesendEmailInput">
          <input
            type="text"
            className="HomeSendEmailinputtag"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="HomeSendEmailinputtag"
            placeholder="Email Address"
          />
          <button className="HomeSendEmailbutton">Subscribe</button>
        </div>
      </div>
    
      <Footer ref={footerRef}/>
    </div>
  );
};

export default Home;
