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
import { useNavigate } from 'react-router-dom'

function ConfirmEmailPage() {
  const state = useSelector((state) => state)
  
  const theme = state.startSettings.theme
  const language = state.changeLanguage.lang

  // hook that handle navigation between pages
  const navigate = useNavigate()
  //=========================================

  const isWaitForConfirm = () => {
    return Object.keys(localStorage).includes(LOCALE_STORAGE_CONGIRM_TOKEN)
    // return true
  }

  useEffect(() => {
    if (!isWaitForConfirm()) navigate('/login')
  }, [])

  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })
  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      {isWaitForConfirm() ? (
        <div className={`ConfirmEmailPage_section ${theme}`} ref={refWidth}>
          <div className="ConfirmEmailPage_section_text1">
            {state.interfaceLang[language].v_y_e_t_c_r} 📬
          </div>
          <div className="ConfirmEmailPage_section_steps">
            <div className="ConfirmEmailPage_section_steps_el">
              ✉️ {state.interfaceLang[language].w_h_s_a_e_t_y_e_a}
            </div>
            <div className="ConfirmEmailPage_section_steps_el">
              👇 {state.interfaceLang[language].c_o_t_l_i_t_l}
            </div>
            <div className="ConfirmEmailPage_section_steps_el">
              ✅ {state.interfaceLang[language].t_r_w_b_c}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ConfirmEmailPage
