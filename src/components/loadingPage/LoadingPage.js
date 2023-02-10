import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import '../loadingPage/loadingPage.scss'
import LoadingEmoji from './loadingEmoji/LoadingEmoji'

function LoadingPage(props) {
  const { main } = props
  const state = useSelector((state) => state)

  const culture = state.culture
  const categoryLocale = state.categoryLocale

  const tl = useRef()
  const tl_close = useRef()
  const loadWrap = useRef()

  const [isLoading, setIsLoading] = useState(true)
  // -----------------------------------------------------------

  function turnOffPage() {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  function closeAnimation() {
    const ctx = gsap.context(() => {
      tl_close.current && tl_close.current.progress(0).kill()
      tl_close.current = gsap
        .timeline()
        .to(loadWrap.current, { y: '-130vh', duration: 1 })
        .to(loadWrap.current, { borderRadius: '100%', duration: 1 }, '-=1')
        .to(loadWrap.current, { onComplete: turnOffPage() })
    }, loadWrap)

    return () => ctx.revert()
  }

  // -----------------------------------------------------------
  useEffect(() => {
    // when main page on display
    if (main && !culture.loading && !categoryLocale.loading) {
      setTimeout(() => closeAnimation(), 250)
    }
  }, [culture.loading, categoryLocale.loading])


  return (
    <>
      {isLoading ? (
        <div className="loadingPageSection" ref={loadWrap}>
          <LoadingEmoji/>
        </div>
      ) : null}
    </>
  )
}

export default LoadingPage
