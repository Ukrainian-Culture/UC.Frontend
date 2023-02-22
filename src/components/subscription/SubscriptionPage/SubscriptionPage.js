import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import StartAppRequests from '../../../hooks/StartAppRequests'
import useGetScreenWidth from '../../../hooks/useGetScreenWidth'
import { USER_REGISTRATION_CALL } from '../../../redux-store/fetchUser/fetchUserConst'
import Header from '../../header/Header'
import LoadingPage from '../../loadingPage/LoadingPage'
import Subscription from '../Subscription'
import '../SubscriptionPage/subscriptionPage.scss'

function SubscriptionPage() {
  const dispatch = useDispatch()

  const [daysAmount, setDaysAmount] = useState(0)
  //===============================================

  /////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (daysAmount !== 0) {
        dispatch({
            type: USER_REGISTRATION_CALL,
            payload: {
              daysAmount: daysAmount
            },
          })
    }
  }, [daysAmount])
  /////////////////////////////////////////////////////////////////////

  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })
  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      <div className="SubscriptionPage_Section" ref={refWidth}>
        {/* <Header/> */}
        <Subscription setDaysAmount={setDaysAmount} subsPage={true}/>
      </div>
    </>
  )
}

export default React.memo(SubscriptionPage)
