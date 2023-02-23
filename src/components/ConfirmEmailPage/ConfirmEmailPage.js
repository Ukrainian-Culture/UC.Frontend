import React, { useEffect, useRef } from 'react'
import StartAppRequests from '../../hooks/StartAppRequests'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import LoadingPage from '../loadingPage/LoadingPage'
import '../ConfirmEmailPage/confirmEmailPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {
  LOCALE_STORAGE_CONGIRM_TOKEN,
  USER_CHANGE_CONFIRM_TOKEN,
} from '../../redux-store/fetchUser/fetchUserConst'

function ConfirmEmailPage() {
  const dispatch = useDispatch()

  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const user = state.user

  //=========================================
  
  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })
  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      <div className="ConfirmEmailPage_section" ref={refWidth}>
        ConfirmEmailPage_section
      </div>
    </>
  )
}

export default ConfirmEmailPage
