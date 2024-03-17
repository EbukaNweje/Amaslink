import React from 'react'
import "./Login.css"
import "./LoginMobile.css"
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const nav = useNavigate()
  return (
    <div className='LoginContainer'>
      <div className='LoginImage'>

        <div className='logo' onClick={()=>nav('/')}></div>
        <div className='logoText'>
          <div className='Loginrapper'>
          <p  style={{color:"white"}}>Enjoy the best Experience</p>
          <p style={{color:"red"}}>AMALINK.COM</p>
          </div>
        </div>

      </div>


      <div className='LoginDetails'>
        <div className='LoginCreateAccount'>
        <h3>Welcome SeniorBoss</h3>
        </div>
      

       


        <main className='LoginMain2'>
            <input type="text" placeholder='Email Address' className='Logininputtag2'/>

              <div className='Logininputtag3'>
              <input type="text" placeholder='Password' className='Logininputtag3Inner' />
              <IoMdEyeOff  className='LoginpasswordEYE'/>
              </div>
        </main>

        <div className='LoginButtonContainer'>
            <button className='LoginButton'>Login</button>
            <h5 className='AlreadyHave'>Dont have an Account? <span style={{color:"#C90A12", cursor: "pointer"}} onClick={() => nav('/signup')}>SignUp</span></h5>
            <div className='LoginOptiontag'>

              <div className='line'></div>

              <h4>or</h4>

              <div className='line'></div>
              </div>
        </div>

        <main className='LoginGoogle'>

       

        <button className='LoginwithGoogle'>

          <p className='LoginpTag'>Sign up with Google</p>

          <FcGoogle  className='LoginGoogleIcon'/>
        </button>

       
        </main>

      </div>

      
    </div>
  )
}

export default Login