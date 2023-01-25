import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import '../loadingEmoji/loadingEmoji.scss'

function LoadingEmoji() {
  const state = useSelector((state) => state)

  const tl = useRef()
  const loadWrap = useRef()

  const [loadEmoji, setLoadEmoji] = useState(['🚸', '🚸', '🚸', '🚸', '🚸'])
  //============================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const staggetSpeed = 0.07

      tl.current && tl.current.progress(0).kill()
      tl.current = gsap
        .timeline({ repeat: -1 })
        .to('.loadingPageSection_wrap_el', { y: 15, stagger: staggetSpeed })
        .to('.loadingPageSection_wrap_el', { y: 0, stagger: staggetSpeed })
    }, loadWrap)

    return () => ctx.revert()
  }, [])

  return (
    <div className="loadingPageSection_wrap" ref={loadWrap}>
      {loadEmoji.map((el, index) => (
        <div className="loadingPageSection_wrap_el" key={`LPSWE_${index}`}>
          {el}
        </div>
      ))}
    </div>
  )
}

export default LoadingEmoji
