import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../header/header.scss'
import { ReactComponent as LOGO } from '../../logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import useClearSelectedOblast from '../../hooks/useClearSelectedOblast'
import gsap from 'gsap'

function Header(props) {
  const { centreText, main, explore } = props
  const location = useLocation()
  
  const stateRedux = useSelector((state) => state)
  // current language
  const language = stateRedux.changeLanguage.lang
  // corelated emoji to category
  const emojiCategory = stateRedux.emojiCategory.emoji
  const corelateCategories = stateRedux.categoriesInfoBlock.corelate
  const corelateToCurrentLang = stateRedux.categoriesInfoBlock.corelateToCurrentLang
  // variable used for move side block with info
  const sideHeight = stateRedux.sideHeight.class
  // variable which contain selected oblast
  const selectedOblast = stateRedux.selectedOblast.selectedOblast
  // this is array which contain
  const aboutOblast = stateRedux.aboutOblast.aboutOblast
  // console.log('aboutOblast', aboutOblast[0].en_name)
  // ===========================================================
  //word used in class when user on particular page
  const activeWord = 'activePage'
  const [headerLeft_map, setHeaderLeft_map] = useState(activeWord)
  const [headerLeft_explore, setHeaderLeft_explore] = useState('')

  // parent wrapper for animtion
  const wrapHead = useRef()
  // timeline for animation
  const tl = useRef()

  // component which render text in the middle of header
  function CentreTextRenderer() {
    // if header on main page
    if (main && centreText !== '') {
      return (
        <>
          <div className="mainHeader_oblastName">
            <div className="mainHeader_oblastName_emoji mainHeader_oblastName_el">
              {aboutOblast[selectedOblast].emoji}
            </div>
            <div className="mainHeader_oblastName_name mainHeader_oblastName_el">
              {aboutOblast[selectedOblast].en_name}
            </div>
            <div className="mainHeader_oblastName_region mainHeader_oblastName_el">
              region
            </div>
          </div>
        </>
      )
    } else if (explore) {
      return (
        <>
          <div className="mainHeader_oblastName">
            <div className="mainHeader_oblastName_emoji mainHeader_oblastName_el">
              {emojiCategory[centreText]}
            </div>
            <div className="mainHeader_oblastName_name mainHeader_oblastName_el">
              {corelateToCurrentLang(centreText, language)}
            </div>
          </div>
        </>
      )
    } else {
      return <></>
    }
  }

  // -----------------------------------------------------------

  useClearSelectedOblast()
  useEffect(() => {
    // add to className "activeWord" on current page
    if (location.pathname === '/') {
      setHeaderLeft_map(activeWord)
      setHeaderLeft_explore('')
    } else if (location.pathname.includes('/explore')) {
      setHeaderLeft_map('')
      setHeaderLeft_explore(activeWord)
    } else {
      setHeaderLeft_map('')
      setHeaderLeft_explore('')
    }
  }, [])

  // animation with gsap when selected oblast
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap.timeline().from('.mainHeader_oblastName', {
        y: -10,
        opacity: 0,
        // stagger: 0.05,
      })
    }, wrapHead)

    return () => ctx.revert()
  }, [centreText])

  return (
    <div className={`headerSection ${sideHeight}`} ref={wrapHead}>
      <div className="mainHeader">
        <div className="headerLeft">
          <Link className="headerLeft_logo" to="/" reloadDocument>
            <LOGO className="headerLeft_logo_svg" />
          </Link>
          <Link
            className={`headerLeft_map headerLeft_map_navs ${headerLeft_map}`}
            to="/"
          >
            Map
          </Link>
          <Link
            className={`headerLeft_explore headerLeft_map_navs ${headerLeft_explore}`}
            to="/explore"
          >
            Explore
          </Link>
        </div>

        <CentreTextRenderer />

        <div className="headerRight">
          {/* <div>en</div>
          <div>theme</div>
          <div>user</div> */}
        </div>
      </div>
    </div>
  )
}

export default Header
