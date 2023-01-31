import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../header/header.scss'
import { ReactComponent as LOGO } from '../../logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import useClearSelectedOblast from '../../hooks/useClearSelectedOblast'
import gsap from 'gsap'
import { ADAPTIVE_M_1, ADAPTIVE_S_1 } from '../../settings/screenSizes'
import {
  CHANGE_SIDEHEIGHT,
  NO_SIDEHEIGHT,
  SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'
import { useLayoutEffect } from 'react'

gsap.config({ nullTargetWarn: false })

function Header(props) {
  const dispatch = useDispatch()
  const changeSideHeight = (prop) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: prop })
  }
  //=============================================================
  //handle header central text format and content
  const { centreText, main, explore, basic, article, articleRegion } = props
  const location = useLocation()

  const stateRedux = useSelector((state) => state)
  // current language
  const language = stateRedux.changeLanguage.lang
  // corelated emoji to category
  const emojiCategory = stateRedux.emojiCategory.emoji
  const corelateCategories = stateRedux.categoriesInfoBlock.corelate
  const corelateToCurrentLang =
    stateRedux.categoriesInfoBlock.corelateToCurrentLang
  // variable used for move side block with info
  const sideHeight = stateRedux.sideHeight.class
  // variable which contain selected oblast
  const selectedOblast = stateRedux.selectedOblast.selectedOblast
  // this is array which contain
  const aboutOblast = stateRedux.aboutOblast
  // width of screen
  const screenWidth = stateRedux.screenWidth.width
  //variable for text in  interface in different language
  const interfaceLang = stateRedux.interfaceLang[language]

  // ===========================================================
  //word used in class when user on particular page
  const activeWord = 'activePage'
  const [headerLeft_map, setHeaderLeft_map] = useState(activeWord)
  const [headerLeft_explore, setHeaderLeft_explore] = useState('')

  // parent wrapper for animtion
  const wrapHead = useRef()
  // timeline for animation
  const tl = useRef()

  const BURGERHEIGHT = 'burgerHeight'
  const NO_BURGERHEIGHT = 'no_burgerHeight'
  // is burger menu active
  const [burgerHeight, setBurgerHeight] = useState('')
  // -----------------------------------------------------------

  // component which render text in the middle of header
  function CentreTextRenderer() {
    // if header on main page

    if (burgerHeight === BURGERHEIGHT) {
      return <></>
    } else if (main && centreText !== '') {
      return (
        <>
          <div className="mainHeader_oblastName">
            <div className="mainHeader_oblastName_emoji mainHeader_oblastName_el">
              {aboutOblast.aboutOblast[selectedOblast].emoji}
            </div>
            <div className="mainHeader_oblastName_name mainHeader_oblastName_el">
              {aboutOblast.aboutOblast[selectedOblast][language]}
            </div>
            <div className="mainHeader_oblastName_region mainHeader_oblastName_el">
              {aboutOblast.region[language]}
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
    } else if (article) {
      const redionId = aboutOblast.getIndex(articleRegion, aboutOblast.aboutOblast)
      return (
        <>
          <div className="mainHeader_oblastName">
            <div className="mainHeader_oblastName_emoji mainHeader_oblastName_el">
              {aboutOblast.aboutOblast[redionId].emoji}
            </div>
            <div className="mainHeader_oblastName_name mainHeader_oblastName_el">
              {aboutOblast.aboutOblast[redionId][language]}
            </div>
            <div className="mainHeader_oblastName_region mainHeader_oblastName_el">
              {aboutOblast.region[language]}
            </div>
          </div>
        </>
      )
    } else if (basic) {
      return <></>
    } else {
      return <></>
    }
  }

  // header template for basic(big) size
  function ScreenBasicSize() {
    return (
      <>
        <div className="mainHeader">
          <div className="headerLeft">
            <Link className="headerLeft_logo" to="/" reloadDocument>
              <LOGO className="headerLeft_logo_svg" />
            </Link>
            <Link
              className={`headerLeft_map headerLeft_map_navs ${headerLeft_map}`}
              to="/"
            >
              {interfaceLang.map}
            </Link>
            <Link
              className={`headerLeft_explore headerLeft_map_navs ${headerLeft_explore}`}
              to="/explore"
            >
              {interfaceLang.explore}
            </Link>
          </div>

          <CentreTextRenderer />

          <div className="headerRight">
            <Link to="/profile" className="headerRight_profile headerRight_el">
              profile
            </Link>
            <Link to="/login" className="headerRight_login headerRight_el">
              login
            </Link>
          </div>
        </div>
      </>
    )
  }

  // header template for mobile size
  function ScreenMobileSize() {
    const burgerWrapp = useRef()
    // second timeline for animation
    const tl_burger = useRef()
    const tl_burger_2 = useRef()

    function animationOfBurger(e) {
      // console.log(e.target.children)
      const ctx = gsap.context(() => {
        tl_burger.current = gsap.timeline().from('.headerRight_lineTop', {
          rotateZ: 90,
        })
      }, e.target)
      return () => ctx.revert()
    }

    useLayoutEffect(() => {
      tl_burger.current && tl_burger.current.progress(0).kill()
      tl_burger_2.current && tl_burger_2.current.progress(0).kill()

      const ctx = gsap.context(() => {
        tl_burger.current = gsap
          .timeline()
          .to('.headerRight_lineTop_burgerHeight', {
            rotateZ: 45,
            duration: 0.3,
          })
          .to(
            '.headerRight_lineBotttom_burgerHeight',
            {
              rotateZ: -45,
              duration: 0.3,
              y: -11.5,
            },
            '-=0.3',
          )
          .from(
            '.headerRight_lineTop_no_burgerHeight',
            {
              rotateZ: 45,
              duration: 0.5,
            },
            '-=.5',
          )
          .from(
            '.headerRight_lineBotttom_no_burgerHeight',
            {
              rotateZ: -45,
              duration: 0.5,
              y: -11.5,
            },
            '-=0.5',
          )
      }, burgerWrapp)

      return () => ctx.revert()
    }, [])

    return (
      <>
        <div className="mainHeader" ref={burgerWrapp}>
          <div className="headerLeft">
            <Link className="headerLeft_logo" to="/" reloadDocument>
              <LOGO className="headerLeft_logo_svg" />
            </Link>
          </div>

          <CentreTextRenderer />

          <div className="headerRight">
            <div
              className={`innerBurgerButton innerBurgerButton_${burgerHeight}`}
              onClick={(e) => {
                burgetClick()
              }}
            >
              <div
                className={`headerRight_lineTop headerRight_el headerRight_lineTop_${burgerHeight}`}
              ></div>
              <div
                className={`headerRight_lineBotttom headerRight_el headerRight_lineBotttom_${burgerHeight}`}
              ></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // -----------------------------------------------------------

  function burgetClick() {
    if (burgerHeight === BURGERHEIGHT && burgerHeight !== '')
      setBurgerHeight(NO_BURGERHEIGHT)
    else if (burgerHeight === NO_BURGERHEIGHT || burgerHeight === '') {
      setBurgerHeight(BURGERHEIGHT)
    }
  }

  useClearSelectedOblast()
  useEffect(() => {
    setBurgerHeight('')

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
    <>
      <div
        className={`headerSection ${sideHeight} headerSection_${burgerHeight}`}
        ref={wrapHead}
      >
        {screenWidth >= ADAPTIVE_S_1 ? (
          <ScreenBasicSize />
        ) : (
          <ScreenMobileSize />
        )}
      </div>

      {screenWidth >= 780 ? null : (
        <div className={`headerSection_burgerBackground ${burgerHeight}`}>
          <div className="headerSection_burgerBackground_navigation">
            <Link
              className={`headerLeft_map headerLeft_map_navs ${headerLeft_map}`}
              to="/"
            >
              {interfaceLang.map}
            </Link>
            <Link
              className={`headerLeft_explore headerLeft_map_navs ${headerLeft_explore}`}
              to="/explore"
            >
              {interfaceLang.explore}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default React.memo(Header)
