import React, { useEffect, useState } from 'react'
import './Caroseltwo.css'
import "./CaroselTwoMobile.css"
const CaroselTwo = () => {

const [currentIndex, setCurrentIndex] = useState(0)
const [currentIndexTwo, setCurrentIndexTwo] = useState(0)

const items = [
    {
      buttonText: 'Discount 20%',
      title: 'Smart Choice',
      description: 'Get your Apple Watch With Discount',
      className: 'HomeCatImage1',
    },
    {
      buttonText: 'Discount 20%',
      title: 'Smart Choice',
      description: 'Get your Smart Laptop With Discount',
      className: 'HomeCatImage2',
    },
]

const itemsTwo =[
    {
        buttonText: 'Discount 30%',
        title: 'Shop & Save',
        description: 'Enjoy Your luxury Car',
        className: 'HomeCatImage3',
      },
      {
        buttonText: 'Discount 30%',
        title: 'Shop & Save',
        description: 'Enjoy Your luxury Car',
        className: 'HomeCatImage4',
      },
]

useEffect(() =>{
    const interval =setInterval(()=>{
        setCurrentIndex((prevIndex) =>(prevIndex ===items.length -1 ? 0 : prevIndex +1));
    }, 5000)

    return () =>clearInterval(interval)
})

useEffect(() =>{
    const intervalTwo =setInterval(()=>{
        setCurrentIndexTwo((prevIndex) =>(prevIndex ===itemsTwo.length -1 ? 0 : prevIndex +1));
    }, 5000)

    return () =>clearInterval(intervalTwo)
})

  return (
    <div className="HomeCategoryImageSpecial">

    <div className="HomeCategoryImageSpecialRapper">
      <div className="HomeCategoryImageSpecialRapperinside">

        <div className="HomecategoryImageInsi8deTest">
          <div className="HomeCatText1">
          <button className='HomecatButton'>{items[currentIndexTwo].buttonText}</button>
            <h2 className='HomeCath2'>{items[currentIndexTwo].title}</h2>
            <p  className='HomeCatp'>{items[currentIndexTwo].description}</p></div>
          <div className={items[currentIndexTwo].className}></div>
        </div> 
      </div>



      <div className="HomeCategoryImageSpecialRapperinside2">
         <div className="HomecategoryImageInsi8deTest">
          <div className="HomeCatText3">
            <button className='HomecatButton'>{itemsTwo[currentIndex].buttonText}</button>
            <h2 className='HomeCath2'>{itemsTwo[currentIndex].title}</h2>
            <p className='HomeCatp'>{itemsTwo[currentIndex].description}</p>
          </div>
          <div className={itemsTwo[currentIndex].className}></div>
        </div> 
        
      </div>
    </div>
   </div>
  )
}

export default CaroselTwo