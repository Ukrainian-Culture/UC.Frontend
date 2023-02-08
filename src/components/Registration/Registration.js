import { IonIcon } from '@ionic/react'
import axios from 'axios'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import GradientCircle from '../gradientBackground/gradientCircle/GradientCircle'
import Header from '../header/Header'
import '../Registration/registration.scss'

function Registration() {
  // wariable used to get width of screen
  const profileWrap = useRef()
  // variable which show is password is visible
  const [isPassVisible, setIsPassVisible] = useState(false)
  // variable which contain icon of eye ( closed or open )
  const [eyePasswordIcon, setEyePasswordIcon] = useState(eyeOffOutline)

  const [locEmail, setLocEmail] = useState('')
  const [locPass, setLocPass] = useState('')
  const [locConfPass, setLocConfPass] = useState('')

  const [isEmailWrong, setIsEmailWrong] = useState(false)
  const [isPassWrong, setIsConfPassWrong] = useState(false)
  const [isConfPassWrong, setIsPassWrong] = useState(false)

  // ===============================================

  // change visibility of password
  const passwordVisibility = () => {
    setIsPassVisible((el) => {
      !el ? setEyePasswordIcon(eyeOutline) : setEyePasswordIcon(eyeOffOutline)
      return !el
    })
  }

  // function which adjust email
  const FormatingPassword = (word) => {
    return word.replaceAll(" ", "")
  }
  // function which adjust password
  const FormatingEmail = (word) => {
    return word.replaceAll(" ", "")
  }

  // get email from user
  const GetLocEmail = (e) => {
    const def = e.target.value
    setLocEmail(def)
    // console.log('email: ', def)
  }
  // get pass from user
  const GetLocPass = (e) => {
    const def = FormatingPassword(e.target.value)
    setLocPass(def)

    locConfPass !== def && def !== '' ? setIsPassWrong(true) : setIsPassWrong(false)
    // console.log('pass: ', def)
  }
  // get confirm pass from user
  const GetLocConfPass = (e) => {
    const def =  FormatingPassword(e.target.value)

    if (locPass.length !== 0 || locConfPass.length !== 0) {
      setLocConfPass(def)
    //   console.log('confirm pass: ', def)

      locPass !== def && def !== '' ? setIsPassWrong(true) : setIsPassWrong(false)

    //   console.log(`shit_${isConfPassWrong}`)
    }
  }
  //////////////////////////////////////////////////////

  //   useEffect(() => {
  //   }, [])

  //////////////////////////////////////////////////////

  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })
  return (
    <>
      <GradientCircle colorClass={'registration'} />
      <div className="RegistrationSection" ref={profileWrap}>
        <div className="RegistrationSection_header">
          <Header />
        </div>

        <div className="RegistrationSection_mainBlock">
          <div className="RegistrationSection_mainBlock_wrapper">
            <div className="RegistrationSection_mainBlock_wrapper_title">
              Create an account
            </div>

            <div className="RegistrationSection_mainBlock_wrapper_subTitle">
              <div className="RegistrationSection_mainBlock_wrapper_subTitle_question">
                New user?
              </div>

              <Link
                to="/login"
                className="RegistrationSection_mainBlock_wrapper_subTitle_linkToLogin"
              >
                Sign in
              </Link>
            </div>

            <div className="RegistrationSection_mainBlock_wrapper_input_wrapper">
              <input
                value={locEmail}
                onChange={(e) => GetLocEmail(e)}
                type="email"
                placeholder="email"
                className="RegistrationSection_mainBlock_wrapper_email RegistrationSection_mainBlock_wrapper_input"
              ></input>
            </div>

            <IonIcon
              icon={eyePasswordIcon}
              className="eyeIconPassword"
              onClick={passwordVisibility}
            />

            <div className="RegistrationSection_mainBlock_wrapper_input_wrapper">
              <input
                value={locPass}
                onChange={(e) => GetLocPass(e)}
                type={isPassVisible ? '' : 'password'}
                placeholder="password"
                className="RegistrationSection_mainBlock_wrapper_password RegistrationSection_mainBlock_wrapper_input"
              ></input>
            </div>

            <div className="RegistrationSection_mainBlock_wrapper_input_wrapper">
              <input
                value={locConfPass}
                onChange={(e) => GetLocConfPass(e)}
                type={isPassVisible ? '' : 'password'}
                placeholder="confirm password"
                className={`RegistrationSection_mainBlock_wrapper_againPassword_${isConfPassWrong} RegistrationSection_mainBlock_wrapper_input`}
              ></input>
            </div>

            <div className="RegistrationSection_mainBlock_wrapper_createButton">
              Create
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
