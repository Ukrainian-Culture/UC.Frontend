import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import '../loadingEmoji/loadingEmoji.scss'
import '../../Login/login.scss'
import randomEmoji from 'random-emoji'

function LoadingEmoji({button}) {
  const state = useSelector((state) => state)

  const tl = useRef()
  const loadWrap = useRef()
  const [loadEmoji, setLoadEmoji] = useState(randomEmoji.random({count: 5}))
  //============================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const staggetSpeed = 0.07

      const amplitude = button ? 10 : 15

      tl.current && tl.current.progress(0).kill()
      tl.current = gsap
        .timeline({ repeat: -1 })
        .to('.loadingPageSection_wrap_el', { y: amplitude, stagger: staggetSpeed })
        .to('.loadingPageSection_wrap_el', { y: 0, stagger: staggetSpeed })
    }, loadWrap)

    return () => ctx.revert()
  }, [])

  if(button){
    return (
      <div className={`loadingPageSection_wrap loadingPageSection_wrap_${button}`} ref={loadWrap}>
        {['+','+','+'].map((el, index) => (
          <div className="loadingPageSection_wrap_el" key={`LPSWE_${index}`}>
            {el}
          </div>
        ))}
      </div>
    )
  }else{
    return (
      <div className={`loadingPageSection_wrap loadingPageSection_wrap_${button}`} ref={loadWrap}>
        {loadEmoji.map((el, index) => (
          <div className="loadingPageSection_wrap_el" key={`LPSWE_${index}`}>
            {el.character}
          </div>
        ))}
      </div>
    )
  }
}

export default LoadingEmoji
