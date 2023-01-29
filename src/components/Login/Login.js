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
         
        </div>
      </div>
    </>
  )
}

export default Login
