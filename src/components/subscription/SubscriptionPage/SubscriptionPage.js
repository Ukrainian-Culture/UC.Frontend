import axios from 'axios'
import { navigate } from 'ionicons/icons'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import StartAppRequests from '../../../hooks/StartAppRequests'
import useChangeEndDate from '../../../hooks/useChangeEndDate'
import useGetScreenWidth from '../../../hooks/useGetScreenWidth'
import {
  LOCALE_STORAGE_CONGIRM_TOKEN,
  USER_REGISTRATION_CALL,
} from '../../../redux-store/fetchUser/fetchUserConst'
import Header from '../../header/Header'
import LoadingPage from '../../loadingPage/LoadingPage'
import PopupBlock from '../../popupBlock/PopupBlock'
import Subscription from '../Subscription'
import '../SubscriptionPage/subscriptionPage.scss'

function SubscriptionPage() {
  const dispatch = useDispatch()

  // hook that handle navigation between pages
  const navigate = useNavigate()

  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const user = state.user
  const theme = state.startSettings.theme

  const [daysAmount, setDaysAmount] = useState(0)
  const [isConfirm, setIsConfirm] = useState(false)

  const [isChange, setIsChange] = useState(false)
  //===============================================

  /////////////////////////////////////////////////////////////////////
  const confirmEmail = () => {
    if (Object.keys(localStorage).includes(LOCALE_STORAGE_CONGIRM_TOKEN)) {
      const url = `${state.startSettings.confirmDomain}/api/account/confirmEmail`
      const confirmToken = JSON.parse(
        localStorage.getItem(LOCALE_STORAGE_CONGIRM_TOKEN),
      )

      const objSubmit = {
        token: confirmToken.token,
        email: confirmToken.email,
      }
      // const objSubmit = {
      //   token: confirmToken,
      //   email: 'owarriso@gmail.com',
      // }
      console.log(objSubmit)

      axios
        .post(url, objSubmit, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            console.log(res.data)
            localStorage.removeItem(LOCALE_STORAGE_CONGIRM_TOKEN)

            setIsConfirm(true)
            setTimeout(() => {
              navigate('/login')
            }, 1500)
          }
        })
    }
  }

  useEffect(() => {
    if (daysAmount !== 0) {
      confirmEmail()

      setIsChange(true)

      dispatch({
        type: USER_REGISTRATION_CALL,
        payload: {
          daysAmount: daysAmount,
        },
      })
    }
  }, [daysAmount])

  useChangeEndDate(isChange, daysAmount)

  /////////////////////////////////////////////////////////////////////

  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })
  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      {isConfirm ? (
        <div className={`confirmEmail_confirm ${theme}`}>
          <PopupBlock setIsVisible={(e) => {}}>
            <div className="confirmEmail_confirm_wrap">
              <div className="confirmEmail_confirm_text">🎉 Verified 🎉</div>
              <div className="confirmEmail_confirm_mark">✅</div>
            </div>
          </PopupBlock>
        </div>
      ) : null}

      <div className={`SubscriptionPage_Section ${theme}`} ref={refWidth}>
        {/* <Header/> */}
        <Subscription setDaysAmount={setDaysAmount} subsPage={true} />
      </div>
    </>
  )
}

export default React.memo(SubscriptionPage)
