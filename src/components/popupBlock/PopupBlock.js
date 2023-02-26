import { IonIcon } from '@ionic/react'
import gsap from 'gsap'
import { closeOutline } from 'ionicons/icons'
import React, { useEffect, useRef, useState } from 'react'
import '../popupBlock/popupBlock.scss'

function PopupBlock({ closeBtn, setIsVisible, children, ...rest }) {
  const tl = useRef()
  const popupRef = useRef()
  const dura = 0.3

  const [visible, setVisible] = useState(true)
  //===============================================================

  const closeOnBackground = (e) => {
    if (e.target == e.currentTarget) {
      // setTimeout(() => setIsVisible(false),dura)
      exitAnim()
    }
  }

  const exitAnim = () => {
    // const ctx = gsap.context(() => {
    //   tl.current.reverse()
    // })
    // return () => ctx.revert()
    const ctx = gsap.context(() => {
      // tl.current && tl.current.progress(0).kill()

      tl.current = gsap
        .timeline()
        .to('.PopupBlock_Section_Content', {
          y: 400,
          duration: dura,
          onComplete: () => setVisible(false),
        })
        .to(popupRef.current, { opacity: 0, duration: dura }, `-=${dura}`)
    }, popupRef)

    return () => ctx.revert()
  }

  // const enterAnim = () => {
  //   setTimeout(() => setIsVisible(false), dura)

  //   const ctx = gsap.context(() => {
  //     tl.current && tl.current.progress(0).kill()

  //     tl.current = gsap.timeline().from(popupRef.current, {
  //       y: -200,
  //       opacity: 0,
  //       duration: dura,
  //     })
  //   }, popupRef)

  //   return () => ctx.revert()
  // }

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap
        .timeline()
        .from('.PopupBlock_Section_Content', {
          y: -200,
          duration: dura,
        })
        .from(popupRef.current, { opacity: 0, duration: dura }, `-=${dura}`)
    }, popupRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!visible) setIsVisible(false)
  }, [visible])

  return (
    <>
      <div
        onClick={closeOnBackground}
        className="PopupBlock_Section"
        ref={popupRef}
      >
        <div className="PopupBlock_Section_Content">
          {closeBtn ? (
            <div
              onClick={() => exitAnim()}
              className="PopupBlock_Section_Content_Close"
            >
              <IonIcon className="popup_icon" icon={closeOutline} />
            </div>
          ) : null}

          <div className="PopupBlock_Section_Content_Main">
            {React.cloneElement(children, { ...rest })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupBlock
