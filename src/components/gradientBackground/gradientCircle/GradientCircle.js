import React from 'react'
import '../gradientCircle/gradientCircle.scss'

function GradientCircle({colorClass}) {
  return (
    <>
    <div className={`GradientCircleSection_glass`}></div>
      <div className={`GradientCircleSection GradientCircleSection_${colorClass}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default GradientCircle
