import React, { useState } from 'react'
import './changer.scss'
import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import { EmailValidation, PasswordValidation } from '../../hooks/Validation'
import { useDispatch, useSelector } from 'react-redux'
import {
  USER_CLEAR_ERROR,
  USER_REGISTRATION_CALL,
} from '../../redux-store/fetchUser/fetchUserConst'

const Changer = (props) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const interfaceLang = state.interfaceLang
  const user = state.user

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

  const [isSubmit, setIsSubmit] = useState(false)

  const OnChangeNew = (e) => {
    const def = e.target.value

    setNew_Content(def)

    if (props.content === 'email') {
      if (def.includes('@') && def.split('.').length === 2) {
        setNewError(EmailValidation(def))
      }
      if (def === '') setNewError(emptyValidation)
      if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
    } else if (props.content === 'password') {
      const def = e.target.value
      setNew_Content(def)

      new_Content !== def && def !== ''
        ? setIsNewWrong(true)
        : setIsNewWrong(false)

      // password validation
      setNewError(PasswordValidation(def))

      if (def === '') setNewError(emptyValidation)
      if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
    }
  }
  const OnChangeConfirm = (e) => {
    const def = e.target.value

    setConfirm_Content(def)

    if (props.content === 'email') {
      if (def.includes('@') && def.split('.').length === 2) {
        setConfirmError(EmailValidation(def))
      }
      if (def === '') setConfirmError(emptyValidation)
      if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
    } else if (props.content === 'password') {
      const def = e.target.value
      setConfirm_Content(def)

      confirm_Content !== def && def !== ''
        ? setIsConfirmWrong(true)
        : setIsConfirmWrong(false)

      // password validation
      setConfirmError(PasswordValidation(def))

      if (new_Content !== def) {
        setConfirmError({
          message: ['Passwords no matching', 'Паролі не співпадають'],
          ok: false,
        })
        setIsConfirmWrong(true)
      }

      if (def === '') setConfirmError(emptyValidation)
      if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
    }
  }
  const OnChangeCurrent = (e) => {
    const def = e.target.value

    setCurrent_Content(def)

    if (props.content === 'email') {
      if (def.includes('@') && def.split('.').length === 2) {
        setCurrentError(EmailValidation(def))
      }
      if (def === '') setCurrentError(emptyValidation)
      if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
    } else if (props.content === 'password') {
      const def = e.target.value
      setConfirm_Content(def)

      current_Content !== def && def !== ''
        ? setIsCurrentWrong(true)
        : setIsCurrentWrong(false)

      // password validation
      setCurrentError(PasswordValidation(def))

      if (def === '') setCurrentError(emptyValidation)
      if (user.error !== '') dispatch({ type: USER_CLEAR_ERROR })
    }
  }

  const isReadyForSubmit = () => {
    const def = state.startSettings.validation
      ? currentError.ok && newError.ok && confirmError.ok
      : true

    return !isCurrentWrong && !isNewWrong && !isConfirmWrong && def
  }

  const Change = (e) => {
    if (e) e.preventDefault()

    if (isReadyForSubmit()) {
      const obj = {
        data: {
          currentContent: current_Content,
          newContent: new_Content,
          confirmContent: confirm_Content,
        },
        choice: props.content,
      }

      setSubmitData(obj)

      setIsSubmit(true)
    }
  }

  return (
    <div className="Changer_Section">
      <div className="Changer_Title">
        {props.content === 'email'
          ? `${interfaceLang[language].change} ${interfaceLang[language].email_c}`
          : `${interfaceLang[language].change} ${
              interfaceLang[language][props.content]
            }`}
      </div>

      <input
        placeholder={`${interfaceLang[language].current} ${
          interfaceLang[language][props.content]
        }`}
        onChange={OnChangeCurrent}
        className="Changer_Input Changer_New_Input"
      />

      <div className="Error_Message">
        {state.startSettings.validation && currentError.message[language]}
      </div>

      <input
        placeholder={`${interfaceLang[language].new} ${
          interfaceLang[language][props.content]
        }`}
        onChange={OnChangeNew}
        className="Changer_Input Changer_New_Input"
      />

      <div className="Error_Message">
        {state.startSettings.validation && newError.message[language]}
      </div>

      <input
        placeholder={
          props.content === 'email'
            ? `${interfaceLang[language].change} ${interfaceLang[language].email_c}`
            : `${interfaceLang[language].change} ${
                interfaceLang[language][props.content]
              }`
        }
        onChange={OnChangeConfirm}
        className="Changer_Input Changer_Confirm_Input"
      />

      <div className="Error_Message">
        {state.startSettings.validation && confirmError.message[language]}
      </div>

      <div className="Changer_Button_wrap">
        <div onClick={Change} className="Changer_Button">
          {interfaceLang[language].change}
        </div>
      </div>
    </div>
  )
}

export default Changer
