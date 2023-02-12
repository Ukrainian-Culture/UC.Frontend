import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_SCREENWIDTH } from '../redux-store/screenWidth/screenWidthConst'

function useGetScreenWidth(props) {
  const { refWidth } = props

  const dispatch = useDispatch()
  // changin variable which help to handle size of 3D map
  const changeScreenWidth = (param) => {
    dispatch({ type: CHANGE_SCREENWIDTH, payload: param })
  }
  //==================================
  const state = useSelector((state) => state)

  useEffect(() => {
    if (refWidth.current) {
      const screenWidth = state.screenWidth.width
      if (screenWidth === 0) changeScreenWidth(refWidth.current.offsetWidth)

      const changeEvent = () => {
        if (screenWidth === 0) changeScreenWidth(refWidth.current.offsetWidth)
        else {
          // console.log(screenWidth, '%%%%%%%%%%%%%%%%%')
          changeScreenWidth(refWidth.current.offsetWidth)
        }
      }

      window.addEventListener('resize', changeEvent)

      return () => {
        window.removeEventListener('resize', changeEvent)
      }
    }
  }, [state, refWidth])
}

export default useGetScreenWidth
