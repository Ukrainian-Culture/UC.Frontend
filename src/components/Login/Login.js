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
} from '../../redux-store/fetchUser/fetchUserConst'

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

  const [submitData, setSubmitData] = useState(null)

  //==============================================

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
  }
  // get pass from user
  const GetLocPass = (e) => {
    const def = FormatingPassword(e.target.value)
    setLocPass(def)
  }

  // function which check if account can be created
  const isReadyForSubmit = () => {
    return !isEmailWrong && !isPassWrong && locEmail !== '' && locPass !== ''
  }

  // function which send data from inputs to url request signup
  const submitFormData = (e) => {
    if (e) e.preventDefault()

    if (isReadyForSubmit()) {
      setSubmitData({
        email: locEmail,
        password: locPass,
      })
      console.log('start submitData')
    }
  }

  // registration request
  useEffect(() => {
    if (submitData != null) {
      fetch('https://localhost:7219/api/account/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log('login request ', res)
          if (Object.keys(res).includes('accessToken')) {
            dispatch({
              type: FETCH_USER_SUCCESS,
              payload: { role: 'user', email: locEmail },
            })
            navigate('/profile')
          } else {
            dispatch({
              type: FETCH_USER_ERROR,
              error: JSON.stringify(res),
            })
          }
          // fetch('https://localhost:7219/api/account/changePassword', {
          //   method: 'PATCH',
          //   headers: {
          //     'content-type': 'application/json',
          //     Authorization: 'bearer ' + res['accessToken'],
          //   },
          //   body: JSON.stringify({
          //     email: 'denys23423534@gmail.com',
          //     currentPassword: oldPass,
          //     newPassword: newPass,
          //     confirmPassword: newPass,
          //   }),
          // })
          //   .then((res_2) => res_2.json())
          //   .then((res_2) => {
          //     console.log('change password request ', res_2)
          //   })
        }).catch((e)=>{
          dispatch({
            type: FETCH_USER_ERROR,
            error: JSON.stringify(e),
          })
        })
    }
  }, [submitData])

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

                <input
                  value={locPass}
                  onChange={(e) => GetLocPass(e)}
                  type="current-password"
                  className="PasswordInput"
                  placeholder={`${state.interfaceLang[language].password}`}
                />

                <div onClick={submitFormData} className="LoginButton">
                  {state.interfaceLang[language].signin}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
