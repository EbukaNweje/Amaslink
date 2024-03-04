import React, { useState } from 'react'
import "./Upload.css"
import "./UploadMobile.css"
import Header from '../Header/Header'
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const nav = useNavigate
    const [select, setSelect] = useState(false)
    const [location, setLocation] = useState(false)

  return (
    <div className='UploadContainer'>
        <Header/>
        <div className='UploadContainerUnder'>
            <div className='UploadRapper'>
                <div className='UploadRapperContainer'>
                    <div className='UploadRapperone'>
                        <div className='UplaodCategoryOne'>
                            <input type="text" placeholder='SELECT CATEGORY'className='UploadInputCategory'/>
                            <FaChevronDown className='UploadArrowDown'onClick={() => setSelect(!select)}/>
                        </div>
                        <div className={`UploadCategoryList ${select? "active" : ""}`}>
                            <ul>
                                <li>Sport</li>
                                <li>Electronics</li>
                                <li>Fashion</li>
                                <li>Animal</li>
                                <li>Books</li>
                                <li>Cars</li>
                                <li>Jobs</li>
                                <li>Education</li>
                                <li>Houses</li>
                            </ul>
                        </div>


                         <div className={`UploadCategoryList2 ${location? "active" : ""}`}>
                            <ul>
                                <li>Abia State</li>
                                <li>Imo State</li>
                                <li>Lagos State</li>
                                <li>Anambra State</li>
                                <li>Enugu State </li>
                                <li>Akwa-ibom</li>
                                <li>Abayasa</li>
                                <li>Abuja</li>
                                <li>Asaba</li>
                            </ul>
                        </div>

                        <div className='UplaodCategoryOne'>
                            <input type="text" placeholder='LOCATION'className='UploadInputCategory'/>
                            <FaChevronDown className='UploadArrowDown'onClick={() =>setLocation(!location)}/>
                        </div>

                    </div>

                    <div className='UploadCategoryTwo'>
                    <input type="file" className='CategoryImageUpload'/>
                    </div>

                    
                    <div className='UploadCategoryThree'>
                    <div className='UploadCategoryRapper'>
                    <input type="text" className='CategoryImageUploadMessage' placeholder='Description'/>
                    </div>
                    </div>

                    <div className='CategoryContainerButton'>
                    <button className='UploadButton'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload