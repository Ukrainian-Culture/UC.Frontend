import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import '../loadingPage/loadingPage.scss'

function LoadingPage() {
  const state = useSelector((state) => state)

  const tl = useRef()
  const loadWrap = useRef()

  // useEffect(()=>{
  //   const ctx = gsap.context(()=>{

  //   }, loadWrap)
  // },[])

  return (
    <>
      {/* {state.culture.loading && state.categoryLocale.loading ? (
        <div className="loadingPageSection"></div>
      ) : null} */}

      {/* <div className="loadingPageSection" ref={loadWrap}>
        <div className='loadingPageSection_wrap'>
          <div className="loadingPageSection_wrap_el">🚸</div>
          <div className="loadingPageSection_wrap_el">🚸</div>
          <div className="loadingPageSection_wrap_el">🚸</div>
          <div className="loadingPageSection_wrap_el">🚸</div>
          <div className="loadingPageSection_wrap_el">🚸</div>
        </div>
      </div> */}
    </>
  )
}

export default LoadingPage
