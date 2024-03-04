import React, { useState } from "react";
import "./Header.css";
import "./HeaderMobile.css";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { BiSolidDetail } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
// import { RiArrowUpSFill } from "react-icons/ri";
import { FaSortUp } from "react-icons/fa6";




const Header = () => {
  const nav = useNavigate()
  const [listChange, setListChange] = useState(false);
  const [search, setSearch] = useState(false)
  const [category, setcategory] = useState(false)

  const handleScreenClick = () => {
    setListChange(false);
  };

  const handleCategory = ()=>{
    setcategory (!category)
  }


  return (
    <div className="HeaderContainer">
      <div className="HeaderContainerContent">
        <div className="HeaderImageContainer" onClick={()=>nav('/')}></div>
      </div>

      <div className="HeaderContainerContent2">
        <ul>
          <li className="HeaderContainerList" onClick={()=>nav('/')}>Home</li>
          <li className="HeaderContainerList" onClick={()=>nav('/faq')}>FAQ</li>
          <li className="HeaderContainerList" onClick={()=>nav('/Contact')}>Contact</li>
          <li className="HeaderContainerList">Listing</li>
          <div className="HeaderCategoryDiv">
          <li className="HeaderContainerList"onClick={handleCategory}>Category
          <FaSortDown  className={`ArrowDown2 ${category? "active":""}`} />

          </li>
          <div className={`HeaderListUlLI ${category ? "active" : ""}`}>
              <ul>
                  <li onClick={()=> nav('/shopping')}>Shoe</li>
                  <li onClick={()=> nav('/shopping')}>Games</li>
                  <li onClick={()=> nav('/shopping')}>Cars</li>
                  <li onClick={()=> nav('/shopping')}>Pets</li>
                  <li onClick={()=> nav('/shopping')}>Books</li>
                  <li onClick={()=> nav('/shopping')}>Land</li>
                  <li onClick={()=> nav('/shopping')}>Cloths</li>
                  <li onClick={()=> nav('/shopping')}>Television</li>
                  <li onClick={()=> nav('/shopping')}>Phone</li>
                  <li onClick={()=> nav('/shopping')}>Laptop</li>
                  <li onClick={()=> nav('/shopping')}>Chairs</li>
                  <li onClick={()=> nav('/shopping')}>House</li>
              </ul>
            </div>

          </div>
        </ul>
      </div>
      <div className="HeaderContainerContent3">
        <div className="HeaderCart">
          <div className="HeaderSearch">

            <div className={`HeaderOwnerRapper ${search? "active" : ""}`}>
              <input type="text" placeholder="Search Items" />
              <CiSearch className="HeaderIcon2" />
            </div>

            <CiSearch className="HeaderIcon3" onClick={() =>setSearch(!search)}/>
          </div>

            <div className="HeaderOtherIcons">
            <FaRegUser
            className="HeaderIcon"
            onClick={() => setListChange(!listChange)}/>
            
            
          <FaCartShopping className="HeaderIcon" onClick={()=> nav('/Checkout')}/>
          <div className="HeaderCircleCart">2</div>

          
            </div>
         
        </div>
      </div>

      {listChange && (
        <div
          className={`HeaderDisplayInner ${listChange ? "active" : ""}`}
          onClick={handleScreenClick}
        >
          <ul>
            <div className="HeaderRapperContainerList">
              <MdOutlineAccountCircle className="HeadericonContainerList" />
              <li>Account</li>
            </div>

            <div className="HeaderRapperContainerList">
              <CiSettings className="HeadericonContainerList" />
              <li>Settings</li>
            </div>

            <div className="HeaderRapperContainerList">
              <TbCategoryFilled className="HeadericonContainerList" />
              <li onClick={()=> nav('/shopping')}>Category</li>
            </div>

            <div className="HeaderRapperContainerList">
              <FaShoppingCart className="HeadericonContainerList" />
              <li>Cart</li>
            </div>

            <div className="HeaderRapperContainerList">
              <IoMdHome className="HeadericonContainerList" />
              <li>Home</li>
            </div>

            <div className="HeaderRapperContainerList">
              <BiSolidDetail className="HeadericonContainerList" />
              <li>About us</li>
            </div>

            <div className="HeaderRapperContainerList">
              <MdContacts className="HeadericonContainerList" />
              <li>Contact</li>
            </div>

            <div className="HeaderRapperContainerList">
              <MdLogout className="HeadericonContainerList" />
              <li>Logout</li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
