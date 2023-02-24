import React, { useEffect, useState } from 'react'
import './changer.scss'
import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import { EmailValidation, PasswordValidation } from '../../hooks/Validation'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_USER_ERROR,
  LS_USER,
  USER_CHANGE_EMAIL,
  USER_CHANGE_EMAIL_PASSWORD_ERROR,
  USER_CLEAR_EMAIL_PASSWORD_ERROR,
  USER_REGISTRATION_CALL,
} from '../../redux-store/fetchUser/fetchUserConst'
import axios from 'axios'
import useUpdateAccessToken from '../../hooks/useUpdateAccessToken'
import LoadingEmoji from '../loadingPage/loadingEmoji/LoadingEmoji'
import PopupBlock from '../popupBlock/PopupBlock'
import { useNavigate } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

const Changer = (props) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const interfaceLang = state.interfaceLang
  const user = state.user

  // hook that handle navigation between pages
  const navigate = useNavigate()

  const emptyValidation = {
    message: [''],
    ok: false,
  }

  const [current_Content, setCurrent_Content] = useState('')
  const [new_Content, setNew_Content] = useState('')
  const [confirm_Content, setConfirm_Content] = useState('')

  const [newError, setNewError] = useState(emptyValidation)
  const [currentError, setCurrentError] = useState(emptyValidation)
  const [confirmError, setConfirmError] = useState(emptyValidation)

  const [isCurrentWrong, setIsCurrentWrong] = useState(false)
  const [isNewWrong, setIsNewWrong] = useState(false)
  const [isConfirmWrong, setIsConfirmWrong] = useState(false)

  const [submitData, setSubmitData] = useState(null)
  const [isSubmitError, setIsSubmitError] = useState(false)
  const [isSubmitLoading, setIsSubmitLoading] = useState(false)

  const [isSubmit, setIsSubmit] = useState(false)

  const [donePopup, setDonePopup] = useState(false)
  const [isLoguot, setIsLogout] = useState(false)

  // =================================================================

  const OnChangeCurrent = (e) => {
    const def = e.target.value

    setCurrent_Content(def)

    if (props.content === 'email') {
      if (def.includes('@') && def.split('.').length === 2) {
        setCurrentError(EmailValidation(def))
      }
    } else if (props.content === 'password') {
      const def = e.target.value
      setConfirm_Content(def)

      // password validation
      setCurrentError(PasswordValidation(def))
    }
    if (def === '') setCurrentError(emptyValidation)
    setIsSubmitError(false)
    setIsSubmit(false)
  }

  const OnChangeNew = (e) => {
    const def = e.target.value

    setNew_Content(def)

    if (props.content === 'email') {
      if (def.includes('@') && def.split('.').length === 2) {
        setNewError(EmailValidation(def))
      }
    } else if (props.content === 'password') {
      const def = e.target.value
      setNew_Content(def)

      if (def === confirm_Content && def !== '') {
        setIsConfirmWrong(false)
        setIsNewWrong(false)
      } else {
        setIsNewWrong(true)
      }

      // password validation
      setNewError(PasswordValidation(def))
    }
    if (def === '') setNewError(emptyValidation)
    setIsSubmitError(false)
    setIsSubmit(false)
  }
  const OnChangeConfirm = (e) => {
    const def = e.target.value

    setConfirm_Content(def)

    if (props.content === 'email') {
      if (def.includes('@') && def.split('.').length === 2) {
        setConfirmError(EmailValidation(def))
      }
    } else if (props.content === 'password') {
      const def = e.target.value
      setConfirm_Content(def)

      if (def === new_Content && def !== '') {
        setIsConfirmWrong(false)
        setIsNewWrong(false)
      } else {
        setIsConfirmWrong(true)
      }

      // password validation
      setConfirmError(PasswordValidation(def))

      if (new_Content !== def) {
        setConfirmError({
          message: ['Passwords no matching', 'Паролі не співпадають'],
          ok: false,
        })
        setIsConfirmWrong(true)
      }
    }
    if (def === '') setConfirmError(emptyValidation)
    setIsSubmitError(false)
    setIsSubmit(false)
  }

  const isReadyForSubmit = () => {
    const def1 = state.startSettings.validation
      ? currentError.ok && newError.ok && confirmError.ok
      : true

    const def2 = !isCurrentWrong && !isNewWrong && !isConfirmWrong

    const def3 = user.error === ''

    return def1 && def2 && def3
  }

  const Change = (e) => {
    if (e) e.preventDefault()

    if (isReadyForSubmit()) {
      setIsSubmit(true)
      setIsSubmitLoading(true)
    }
  }

  // call when change of pass/email done and need to write data to reduser
  const closeDonePopup = () => {
    props.setIsVisible(false)

    // navigate(0)
    // dispatch({ type: USER_CHANGE_EMAIL, payload: new_Content })
  }

  ////////////////////////////////////////////////////////////////////////////
  useLogout(isLoguot)

  const changeRequest = (token) => {
    let url
    let objSubmit

    if (props.content === 'email') {
      url = `${state.startSettings.confirmDomain}/api/account/changeEmail`

      objSubmit = {
        currentEmail: user.data.email,
        newEmail: new_Content,
      }
    } else if (props.content === 'password') {
      url = `${state.startSettings.confirmDomain}/api/account/changePassword`

      objSubmit = {
        email: user.data.email,
        currentPassword: current_Content,
        newPassword: new_Content,
        confirmPassword: confirm_Content,
      }
    }

    axios
      .patch(url, objSubmit, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setIsSubmitLoading(false)
          setDonePopup(true)
          if (props.content === 'email') setIsLogout(true)
          // //---------------------
          // const locStor = JSON.parse(localStorage.getItem(LS_USER))
          // const def = {
          //   accessToken: locStor.accessToken,
          //   refreshToken: locStor.refreshToken,
          //   email: new_Content,
          //   role: user.data.role,
          // }
          // localStorage.setItem(LS_USER, JSON.stringify(def))
          // //---------------------

          setTimeout(() => closeDonePopup(), 2000)
        }
      })
      .catch((e) => {
        console.log('error: change pass/email')
        setIsSubmitError(true)
        setIsSubmitLoading(false)
        setIsSubmit(false)
      })
  }

  // hook which updates access/refresh tokens
  useUpdateAccessToken(changeRequest, isSubmit)

  ////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {donePopup ? (
        <div className="Changer_donePopup">
          <PopupBlock setIsVisible={(e) => {}}>
            <div className="Changer_donePopup_el">✅</div>
          </PopupBlock>
        </div>
      ) : null}

      <div className="Changer_Section">
        <div className="Changer_Title">
          {props.content === 'email'
            ? `${interfaceLang[language].change} ${interfaceLang[language].email_e}`
            : `${interfaceLang[language].change} ${
                interfaceLang[language][props.content]
              }`}
        </div>

        <input
          placeholder={
            props.content === 'email'
              ? `${interfaceLang[language].current_e}`
              : `${interfaceLang[language].current_p}`
          }
          onChange={OnChangeCurrent}
          className="Changer_Input Changer_New_Input"
        />

        {state.startSettings.validation ? (
          <div className="Error_Message">{currentError.message[language]}</div>
        ) : null}

        <input
          placeholder={
            props.content === 'email'
              ? `${interfaceLang[language].new_e}`
              : `${interfaceLang[language].new_p}`
          }
          onChange={OnChangeNew}
          className="Changer_Input Changer_New_Input"
        />

        {state.startSettings.validation ? (
          <div className="Error_Message">{newError.message[language]}</div>
        ) : null}

        <input
          placeholder={
            props.content === 'email'
              ? `${interfaceLang[language].confirm_e}`
              : `${interfaceLang[language].confirm_p}`
          }
          onChange={OnChangeConfirm}
          className="Changer_Input Changer_Confirm_Input"
        />

        {state.startSettings.validation ? (
          <div className="Error_Message">{confirmError.message[language]}</div>
        ) : null}

        <div className="Changer_Button_wrap">
          <div onClick={Change} className="Changer_Button">
            {!isSubmit && !isSubmitLoading ? (
              <>{interfaceLang[language].change}</>
            ) : (
              <LoadingEmoji button={true} />
            )}
          </div>
        </div>

        {isSubmitError ? (
          <div className="Error_Message">
            {state.interfaceLang[language].b_e_o_p}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Changer
