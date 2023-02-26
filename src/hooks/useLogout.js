import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LS_USER, USER_LOGOUT } from '../redux-store/fetchUser/fetchUserConst'

function useLogout(isLoguot) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLoguot) {
      dispatch({
        type: USER_LOGOUT,
      })
      console.log("logout")
      localStorage.removeItem(LS_USER)
    }
  }, [isLoguot])
}

export default useLogout
