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

  const WriteToLocStor = (obj) => {
    localStorage.setItem(LS_USER, JSON.stringify(obj))
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
          if (res['accessToken']) {
            const role =
              submitData.email === 'admin@gmail.com' &&
              submitData.password === 'AdminPassword'
                ? 'admin'
                : 'user'

            const resObject = {
              role: role,
              email: submitData.email,
              accessToken: res['accessToken'],
              refreshToken: res['refreshToken'],
            }
            console.log(resObject)

            // write to localStorage
            WriteToLocStor(resObject)
            // write to user reduser
            dispatch({
              type: FETCH_USER_SUCCESS,
              payload: resObject,
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
