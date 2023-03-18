import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function useChangeEndDate(isCall, days) {
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const user = state.user
  //   ------------------------------------------------

  const FormatData = () => {
    let t_daysAmount = days

    const date = new Date()
    let t_startDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
    let t_endDate = [0, 0, 0]
    let addYear = 0
    let addMonth = 0
    let addDay = 0

    // spliting days number into days months years
    while (t_daysAmount > 0) {
      if (t_daysAmount >= 365) {
        t_daysAmount = t_daysAmount - 365
        addYear++
      } else if (t_daysAmount >= 31) {
        t_daysAmount = t_daysAmount - 31
        addMonth++
      } else {
        addDay = t_daysAmount
        t_daysAmount = 0
      }
    }

    t_endDate[0] = t_startDate[0] + addDay
    t_endDate[1] = t_startDate[1] + addMonth
    t_endDate[2] = t_startDate[2] + addYear

    // stacking days if 45 dsys === 1 month 14 days
    while (t_endDate[0] >= 31) {
      // console.log('days cycle')
      if (t_endDate[0] > 31) {
        t_endDate[0] = t_endDate[0] - 31
        t_endDate[1]++
      }
    }

    // stacking month if 12 dsys 13 month === 12 days 1 month +1 year
    while (t_endDate[1] >= 12) {
      // console.log('month cycle')
      if (t_endDate[1] > 12) {
        t_endDate[1] = t_endDate[1] - 12
        t_endDate[2]++
      }
    }

    return t_endDate
  }

  const changeEndOfSub = () => {
    // console.log(FormatData(days))

    const formData = FormatData(days)
    const d = new Date(`${formData[1]}/${formData[0]}/${formData[2]}`)
    const time = d.toISOString()

    // console.log(time)

    return time
  }

  ///////////////////////////////////////////////////////////////
  const changeRequest = () => {
    const url = `${state.startSettings.confirmDomain}/api/account/ChangeEndOfSub`

    const objSubmit = {
      email: user.data.email,
      newEndOfSubscription: changeEndOfSub(days),
    }

    axios
      .patch(url, objSubmit, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        console.log('success', res)
      })
      .catch((e) => {
        console.log('error: update subscription date', e)
      })
  }
  ///////////////////////////////////////////////////////////////

  useEffect(() => {
    if (isCall) changeRequest()
  }, [isCall])
}

export default useChangeEndDate
