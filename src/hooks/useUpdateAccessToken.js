import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_USER_ERROR,
  LS_USER,
  USER_CHANGE_EMAIL_PASSWORD_ERROR,
  USER_UPDATE_TOKENS,
} from '../redux-store/fetchUser/fetchUserConst'

function useUpdateAccessToken(func, isSubmit) {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const user = state.user

  useEffect(() => {
    if (isSubmit) {
      const url = `${state.startSettings.confirmDomain}/api/account/refreshToken`

      const locStor = JSON.parse(localStorage.getItem(LS_USER))

      const objSubmit = {
        accessToken: locStor.accessToken,
        refreshToken: locStor.refreshToken,
      }

      axios
        .post(url, objSubmit, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            // console.log(res)

            const def = {
              accessToken: res.data.accessToken,
              refreshToken: res.data.refreshToken,
              email: user.data.email,
              role: user.data.role,
            }

            localStorage.setItem(LS_USER, JSON.stringify(def))

            // dispatch({ type: USER_UPDATE_TOKENS, payload: res })
          }
          return res
        })
        .then((res) => func(res.data.accessToken))
        .catch((e) => {
          console.log('error: update tokens')
        })
    }
  }, [isSubmit])
}

export default useUpdateAccessToken
