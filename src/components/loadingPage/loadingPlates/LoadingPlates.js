import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import '../loadingPlates/loadingPlates.scss'

function LoadingPlates(props) {
  const { explore, history, other } = props

  const tl_explore = useRef()
  const tl_history = useRef()
  const tl_other = useRef()
  const loadWrap = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl_explore.current && tl_explore.current.progress(0).kill()
      tl_history.current && tl_history.current.progress(0).kill()
      // tl_other.current && tl_other.current.progress(0).kill()
      const dut_sec = 0.8
      const stag_sec = 0.08

      if (explore) {
        
        tl_explore.current = gsap 
          .timeline({ repeat: -1 })
          .to('.LoadingPlatesSection_el', {
            opacity: 0.2,
            duration: dut_sec,
            stagger: stag_sec,
          })
          .to('.LoadingPlatesSection_el', {
            opacity: 1,
            duration: dut_sec,
            stagger: stag_sec,
          })
      }
      if (history) {
        
        tl_history.current = gsap
          .timeline({ repeat: -1 })
          .to('.historyRenderer_wrapper_section_mainContainer_sub', {
            opacity: 0.2,
            duration: dut_sec,
            stagger: stag_sec,
          })
          .to(
            '.historyRenderer_wrapper_year',
            {
              opacity: 0.2,
              duration: dut_sec,
              stagger: stag_sec,
            },
            '-=1',
          )
          .to(
            '.historyRenderer_wrapper_section_sideContainer',
            {
              opacity: 0.2,
              duration: dut_sec,
              stagger: stag_sec,
            },
            '-=1',
          )
          .to('.historyRenderer_wrapper_section_mainContainer_sub', {
            opacity: 1,
            duration: dut_sec,
            stagger: stag_sec,
          })
          .to(
            '.historyRenderer_wrapper_year',
            {
              opacity: 1,
              duration: dut_sec,
              stagger: stag_sec,
            },
            '-=1',
          )
          .to(
            '.historyRenderer_wrapper_section_sideContainer',
            {
              opacity: 1,
              duration: dut_sec,
              stagger: stag_sec,
            },
            '-=1',
          )
      }
      if (other) {
        
        tl_other.current = gsap
          .timeline({ repeat: -1 })
          .to('.otherRenderer_Loading_el', {
            opacity: 0.2,
            duration: dut_sec,
            stagger: stag_sec,
          })
          .to('.otherRenderer_Loading_el', {
            opacity: 1,
            duration: dut_sec,
            stagger: stag_sec,
          })
      }
    }, loadWrap)

    return () => ctx.revert()
  }, [])

  const LoadingForDifferentScreen = () => {
    // explore loading
    if (explore) {
      const arrOfPlates = [1, 2, 3, 4, 5, 6, 7, 8]

      return (
        <div className="explorePage_mainPlates" ref={loadWrap}>
          {arrOfPlates.map((el, index) => {
            return (
              <div className="LoadingPlatesSection_el" key={`LPEL_${index}`}>
                {null}
              </div>
            )
          })}
        </div>
      )
    }
    // history loading
    else if (history) {
      const arrHistory = [
        {
          year: '20',
          list: [1, 2, 3, 4],
        },
        {
          year: '19',
          list: [1, 2, 3],
        },
      ]

      return (
        <>
          <div className="historyRenderer_wrapperLoading_ref" ref={loadWrap}>
            {arrHistory.map((el, index) => {
              return (
                <div
                  key={`fho_${index}`}
                  className="historyRenderer_wrapperLoading"
                >
                  <div className="historyRenderer_wrapper_year">
                    <div className="historyRenderer_wrapper_year_text">
                      {null}
                    </div>
                  </div>

                  <div className="historyRenderer_wrapper_section">
                    <div className="historyRenderer_wrapper_section_sideContainer"></div>

                    <div className="historyRenderer_wrapper_section_mainContainer">
                      <div className="historyRenderer_wrapper_section_mainContainer_sub">
                        <div className="historyRenderer_wrapper_section_mainContainer_sub_subWrap"></div>
                      </div>

                      {el.list.map((el_2, index_2) => {
                        return (
                          <div
                            className="historyRenderer_wrapper_section_mainContainer_sub"
                            key={`fho_3_${index_2}`}
                          >
                            <div className="historyRenderer_wrapper_section_mainContainer_sub_subWrap">
                              <div className="historyRenderer_wrapper_section_mainContainer_sub_subWrap_subLine"></div>
                            </div>

                            <div className="historyRenderer_wrapper_section_mainContainer_wrap">
                              <div className="historyRenderer_wrapper_section_mainContainer_wrap_sub_subText">
                                {null}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )
    }
    // other category
    else if (other) {
      const arrOfPlates = [1, 2, 3, 4, 5, 6]
      return (
        <>
          <div className="otherRenderer_Loading" ref={loadWrap}>
            {arrOfPlates.map((el, index) => {
              return (
                <div
                  className="otherRenderer_Loading_el"
                  key={`CPDLEPDM_${index}`}
                >
                  {null}
                </div>
              )
            })}
          </div>
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    // <div className="LoadingPlatesSection">
    //   <div className="LoadingPlatesSection_wrapper">
    //     {arrOfPlates.map((el, index) => {
    //       return (
    //         <div className="LoadingPlatesSection_el" key={`LPEL_${index}`}>
    //           {el}
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
    <>
      <LoadingForDifferentScreen />
    </>
  )
}

export default LoadingPlates
