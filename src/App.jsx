import React from 'react'
import "./App.css"
import {HashRouter, Routes, Route} from 'react-router-dom'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import Home from './Home/Home'
import Contact from './Auth/ContactUs/Contact'
import FAQ from './FAQ/FAQ'
import Test from './Test'
import Upload from './Upload/Upload'
import Header from './Header/Header'
import Caro from '../src/Caro'
import Carousel from './Carousel'
import Checkout from './Checkout/Checkout'
import Review from './Review/Review'
import Shopping from './Shopping/Shopping'

const App = () => {
  return (

    <>
    <HashRouter>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/faq' element={ <FAQ/> } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/shopping' element={<Shopping/>}/>

      </Routes>
    </HashRouter>

    </>
    // <div className='container'>
    //   {/* <Login/> */}
    //   {/* <Signup/> */}
    //    <Home/> 
    //   {/* <Contact/> */}
    //   {/* <Upload/> */}
    //   {/* <FAQ/> */}
    //   {/* <Header/> */}
    //   {/* <Review/> */}
    //   {/* <Test/> */}
    //   {/* <Carousel/> */}
     
    // </div>
  )
}

export default App