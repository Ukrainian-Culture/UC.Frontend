import { IonIcon } from '@ionic/react'
// import axios from 'axios'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import Header from '../header/Header'
import '../Login/login.scss'
import GradientBackground from '../gradientBackground/GradientBackground'
import GradientCircle from '../gradientBackground/gradientCircle/GradientCircle'
import StartAppRequests from '../../hooks/StartAppRequests'
import LoadingPage from '../loadingPage/LoadingPage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  USER_CLEAR_ERROR,
} from '../../redux-store/fetchUser/fetchUserConst'
import useLocalToken from '../../hooks/useLocalToken'
import useLogin from '../../hooks/useLogin'
import { EmailValidation, PasswordValidation } from '../../hooks/Validation'
import LoadingEmoji from '../loadingPage/loadingEmoji/LoadingEmoji'

function Login() {
  const dispatch = useDispatch()
  const profileWrap = useRef()
  const state = useSelector((state) => state)
  const user = state.user
  // current language
  const language = state.changeLanguage.lang

  // hook that handle navigation between pages
  const navigate = useNavigate()
  // ---------------------------------------------

  const [locEmail, setLocEmail] = useState('')
  const [locPass, setLocPass] = useState('')
  const [locConfPass, setLocConfPass] = useState('')

  const [isEmailWrong, setIsEmailWrong] = useState(false)
  const [isPassWrong, setIsConfPassWrong] = useState(false)
  const [isConfPassWrong, setIsPassWrong] = useState(false)

  const emptyValidation = {
    message: '',
    ok: false,
  }

  const [emailError, setEmailError] = useState(emptyValidation)
  const [passError, setPassError] = useState(emptyValidation)

  const [submitData, setSubmitData] = useState(null)
  const [isSubmit, setIsSubmit] = useState(false)

  // variable which show is password is visible
  const [isPassVisible, setIsPassVisible] = useState(false)
  // variable which contain icon of eye ( closed or open )
  const [eyePasswordIcon, setEyePasswordIcon] = useState(eyeOffOutline)

  //==============================================

  // change visibility of password
  const passwordVisibility = () => {
    setIsPassVisible((el) => {
      !el ? setEyePasswordIcon(eyeOutline) : setEyePasswordIcon(eyeOffOutline)
      return !el
    })
  }

  const clickSignIn = () => {
    navigate('/registration')
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

    if (def.includes('@') && def.split('.').length == 2) {
      setEmailError(EmailValidation(def))
    }

    if (def === '') setEmailError(emptyValidation)
    if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
  }
  // get pass from user
  const GetLocPass = (e) => {
    const def = FormatingPassword(e.target.value)
    setLocPass(def)

    setPassError(PasswordValidation(def))

    if (def === '') setPassError(emptyValidation)
    if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
  }

  // function which check if account can be created
  const isReadyForSubmit = () => {
    const def_1 =
      !isEmailWrong && !isPassWrong && locEmail !== '' && locPass !== ''

    const def_2 = state.startSettings.validation
      ? emailError.ok && passError.ok
      : true

    return def_1 && def_2
  }

  // function which send data from inputs to url request signup
  const submitFormData = (e) => {
    if (e) e.preventDefault()

    if (isReadyForSubmit()) {
      setSubmitData({
        email: locEmail,
        password: locPass,
      })

      setIsSubmit(true)
      console.log('start submitData')
    }
  }

  const LoggingErrorRenderer = () => {
    if (user.error !== '') {
      return (
        <>
          <div className="LoginForms_Error LoginForms_Error_loging">
            {state.interfaceLang[language].user} {locEmail}{' '}
            {state.interfaceLang[language].b_e_o_p}
          </div>
        </>
      )
    }

    return <></>
  }

  useEffect(() => {
    if (user.error !== '') setIsSubmit(false)
  }, [user.error])

  useEffect(() => {
    dispatch({ type: USER_CLEAR_ERROR })
  }, [])

  //////////////////////////////////////////////////////////////////////

  // signing in
  useLogin(submitData)

  // redirect after signing uinrequest
  useEffect(() => {
    if (user.data['accessToken'] !== '') {
      navigate('/profile')
      setIsSubmit(false)
    }
  }, [user.data['accessToken']])

  //////////////////////////////////////////////////////////////////////

  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })
  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      {/* <GradientBackground/> */}
      <GradientCircle />

      <div className="LoginSection" ref={profileWrap}>
        <div className="LoginSection_header">
          <Header />
        </div>

        <div className="LoginSection_mainBlock">
          <div className="SignInSection">
            <div className="SignIn">
              {state.interfaceLang[language].signIn_account}
            </div>

            <div className="NewUserSignIn">
              {state.interfaceLang[language].new_user}
              <div onClick={clickSignIn} className="CreateNewAccount">
                {state.interfaceLang[language].create_an_account}
              </div>
            </div>

            <div className="LoginForms">
              <form className="UserLoginForm">
                <input
                  value={locEmail}
                  onChange={(e) => GetLocEmail(e)}
                  type="email"
                  className="LoginInput"
                  placeholder={`${state.interfaceLang[language].email}`}
                />

                <div className="LoginForms_emailError LoginForms_Error">
                  {state.startSettings.validation &&
                    emailError.message[language]}
                </div>

                <IonIcon
                  icon={eyePasswordIcon}
                  className="eyeIconPassword"
                  onClick={passwordVisibility}
                />

                <input
                  value={locPass}
                  onChange={(e) => GetLocPass(e)}
                  type={isPassVisible ? '' : 'password'}
                  autoComplete="current-password"
                  className="PasswordInput"
                  placeholder={`${state.interfaceLang[language].password}`}
                />

                <div className="LoginForms_emailPass LoginForms_Error">
                  {state.startSettings.validation &&
                    passError.message[language]}
                </div>

                <div onClick={submitFormData} className="LoginButton">
                  {user.loading && !isSubmit ? (
                    <>{state.interfaceLang[language].signin}</>
                  ) : (
                    <LoadingEmoji button={true} />
                  )}
                </div>

                <LoggingErrorRenderer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Login)
