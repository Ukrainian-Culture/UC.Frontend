import { IonIcon } from '@ionic/react'
// import axios from 'axios'
import { eyeOffOutline, eyeOutline, navigate } from 'ionicons/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import StartAppRequests from '../../hooks/StartAppRequests'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import {
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  USER_REGISTRATION_CALL,
} from '../../redux-store/fetchUser/fetchUserConst'
import GradientCircle from '../gradientBackground/gradientCircle/GradientCircle'
import Header from '../header/Header'
import LoadingEmoji from '../loadingPage/loadingEmoji/LoadingEmoji'
import LoadingPage from '../loadingPage/LoadingPage'
// import NotFoundPage from '../notFoundPage/NotFoundPage'
import Profile from '../profile/Profile'
import '../Registration/registration.scss'
import PopupSubs from '../subscription/popupSubs/PopupSubs'

function Registration() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const interfaceLang = state.interfaceLang
  const user = state.user

  // hook that handle navigation between pages
  const navigate = useNavigate()

  //--------------------------------------------------

  // variable which controlls if popupSubs visible
  const [isVisible, setIsVisible] = useState(false)

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

  const [submitData, setSubmitData] = useState(null)
  const [daysAmount, setDaysAmount] = useState(0)

  const [isSubmit, setIsSubmit] = useState(false)
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
    return word.replaceAll(' ', '')
  }
  // function which adjust password
  const FormatingEmail = (word) => {
    return word.replaceAll(' ', '')
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

    locConfPass !== def && def !== ''
      ? setIsPassWrong(true)
      : setIsPassWrong(false)
    // console.log('pass: ', def)
  }
  // get confirm pass from user
  const GetLocConfPass = (e) => {
    const def = FormatingPassword(e.target.value)

    if (locPass.length !== 0 || locConfPass.length !== 0) {
      setLocConfPass(def)
      //   console.log('confirm pass: ', def)

      locPass !== def && def !== ''
        ? setIsPassWrong(true)
        : setIsPassWrong(false)

      //   console.log(`shit_${isConfPassWrong}`)
    }
  }

  // function which check if account can be created
  const isReadyForSubmit = () => {
    return (
      !isEmailWrong &&
      !isPassWrong &&
      locEmail !== '' &&
      locPass !== '' &&
      locConfPass !== ''
    )
  }

  // function which send data from inputs to url request signup
  const submitFormData = (e) => {
    if (e) e.preventDefault()

    if (isReadyForSubmit()) {
      setSubmitData({
        email: locEmail,
        password: locPass,
        confirmPassword: locConfPass,
      })

      setIsSubmit(true)
      setIsVisible(true)
    }
  }
  //////////////////////////////////////////////////////

  // registration request
  useEffect(() => {
    if (submitData != null && daysAmount !== 0) {
      const url = `${state.startSettings.domain}/api/account/signup`
      const url_2 = 'https://localhost:7219/api/account/signup'

      fetch(url_2, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((res) => {
          if (typeof res === 'boolean') {
            // console.log('registration request ', res)

            // writeLocalStorage()
            setIsSubmit(false)
            dispatch({
              type: USER_REGISTRATION_CALL,
              payload: {
                daysAmount: daysAmount,
                email: locEmail,
              },
            })
            navigate('/login')
          } else {
            console.log('error registration request', res.status)
            dispatch({
              type: FETCH_USER_ERROR,
              error: JSON.stringify(res),
            })
          }
        })
        .catch((e) => {
          console.log('error registration request', e)
        })
    }
  }, [submitData, daysAmount])

  //////////////////////////////////////////////////////

  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })
  return (
    <>
      {user.data.role !== 'user' ? (
        <>
          <StartAppRequests />
          <LoadingPage main={true} />

          {isVisible ? (
            <PopupSubs
              setIsSubmit={setIsSubmit}
              setIsVisible={setIsVisible}
              setDaysAmount={setDaysAmount}
            />
          ) : null}

          <GradientCircle colorClass={'registration'} />

          <div className="RegistrationSection" ref={profileWrap}>
            <div className="RegistrationSection_header">
              <Header />
            </div>

            <div className="RegistrationSection_mainBlock">
              <form className="RegistrationSection_mainBlock_wrapper">
                <div className="RegistrationSection_mainBlock_wrapper_title">
                  {interfaceLang[language].create_an_account}
                </div>

                <div className="RegistrationSection_mainBlock_wrapper_subTitle">
                  <div className="RegistrationSection_mainBlock_wrapper_subTitle_question">
                    {interfaceLang[language].already_have_an_account}
                  </div>

                  <Link
                    to="/login"
                    className="RegistrationSection_mainBlock_wrapper_subTitle_linkToLogin"
                  >
                    {interfaceLang[language].signin}
                  </Link>
                </div>

                <div className="RegistrationSection_mainBlock_wrapper_input_wrapper">
                  <input
                    value={locEmail}
                    onChange={(e) => GetLocEmail(e)}
                    type="email"
                    autoComplete="email"
                    placeholder={`${interfaceLang[language].email}`}
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
                    autoComplete="new-password"
                    placeholder={`${interfaceLang[language].password}`}
                    className="RegistrationSection_mainBlock_wrapper_password RegistrationSection_mainBlock_wrapper_input"
                  ></input>
                </div>

                <div className="RegistrationSection_mainBlock_wrapper_input_wrapper">
                  <input
                    value={locConfPass}
                    onChange={(e) => GetLocConfPass(e)}
                    type={isPassVisible ? '' : 'password'}
                    autoComplete="new-password"
                    placeholder={`${interfaceLang[language].confirm_password}`}
                    className={`RegistrationSection_mainBlock_wrapper_againPassword_${isConfPassWrong} RegistrationSection_mainBlock_wrapper_input`}
                  ></input>
                </div>

                <div
                  onClick={submitFormData}
                  className="RegistrationSection_mainBlock_wrapper_createButton"
                >
                  {user.loading && !isSubmit ? (
                    <>{interfaceLang[language].create}</>
                  ) : (
                    <LoadingEmoji button={true} />
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Profile />
      )}
    </>
  )
}

export default Registration
