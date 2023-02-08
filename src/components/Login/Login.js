import React from 'react'
import { useRef } from 'react'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import Header from '../header/Header'
import '../Login/login.scss'
import GradientBackground from '../gradientBackground/GradientBackground'
import GradientCircle from '../gradientBackground/gradientCircle/GradientCircle'

function Login() {
  const profileWrap = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })
  return (
    <>
      {/* <GradientBackground/> */}
      <GradientCircle />
      <div className="LoginSection" ref={profileWrap}>
        <div className="LoginSection_header">
          <Header />

        </div>

        <div className="LoginSection_mainBlock">
            <div className="SignInSection">
                <div className="SignIn">Sign In</div>
                <div className="NewUserSignIn">
                    New user?
                    <div className="CreateNewAccount">Create an account</div>
                </div>
                <div className="LoginForms">
                    <form className="UserLoginForm">
                        <input type="text" className='LoginInput' placeholder='username'/>
                        <input type="text" className='PasswordInput' placeholder='password'/>
                        <button className="LoginButton">log in</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
