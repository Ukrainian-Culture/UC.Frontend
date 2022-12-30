import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { CHANGE_OBLAST } from '../redux-store/selectedOblast/selectedOblastConst'

function useClearSelectedOblast() {
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    if (location.pathname !== '/') {
      dispatch({ type: CHANGE_OBLAST, payload: '' })
    }
  }, [])
}

export default useClearSelectedOblast
