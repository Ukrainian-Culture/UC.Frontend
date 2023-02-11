import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  LS_USER,
} from '../redux-store/fetchUser/fetchUserConst'

async function useLocalToken() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  //=====================================

  useEffect(() => {
    let ls_user = localStorage.getItem(LS_USER)
    if (ls_user) {
      const ls_user_json = JSON.parse(ls_user)
      // console.log('exist', ls_user_json)

      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: {
          role: 'user',
          email: ls_user_json.email,
          accessToken: ls_user_json['accessToken'],
          refreshToken: ls_user_json['refreshToken'],
        },
      })
    } else {
      // console.log('NOT exist')
    }
  }, [])
}

export default useLocalToken
