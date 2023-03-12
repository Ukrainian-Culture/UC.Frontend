import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import '../gradientCircle/gradientCircle.scss'

function GradientCircle({ colorClass }) {
  const state = useSelector((state) => state)
  const theme = state.startSettings.theme
  // width of screen
  const screenWidth = state.screenWidth.width
  const blurBack = useRef()

  useEffect(() => {
    if (blurBack.current)
      blurBack.current.style.width = `${screenWidth}px!important`
    // console.log(`${screenWidth}px`)
  }, [screenWidth])

  return (
    <>
      <div className={`GradientCircleSection_glass`} ref={blurBack}></div>
      <div className={`GradientCircleSection_back_${theme}`}></div>
      <div
        className={`GradientCircleSection GradientCircleSection${theme} GradientCircleSection_${colorClass}${theme}`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default GradientCircle
