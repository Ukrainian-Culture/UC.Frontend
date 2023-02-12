import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  LS_USER,
} from '../redux-store/fetchUser/fetchUserConst'

async function useLogin(submitData) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  //=====================================

   const WriteToLocStor = (res) => {
    localStorage.setItem(
      LS_USER,
      JSON.stringify({
        role: 'user',
        email: submitData.email,
        accessToken: res['accessToken'],
        refreshToken: res['refreshToken'],
      }),
    )
  }

  useEffect(() => {
    if (submitData != null) {
      fetch(`${state.startSettings.userRequestDomain}/api/account/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((res) => {
          WriteToLocStor(res)

          if (res['accessToken']) {
            dispatch({
              type: FETCH_USER_SUCCESS,
              payload: {
                role: 'user',
                email: submitData.email,
                accessToken: res['accessToken'],
                refreshToken: res['refreshToken'],
              },
            })
          } else {
            dispatch({
              type: FETCH_USER_ERROR,
              error: JSON.stringify(res),
            })
          }
        })
    }
  }, [submitData])
}

export default useLogin
