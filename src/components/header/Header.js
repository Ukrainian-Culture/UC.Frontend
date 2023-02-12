import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../header/header.scss'
import { ReactComponent as LOGO } from '../../logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
import { IonIcon } from '@ionic/react'
import { personCircleOutline, enterOutline, globeOutline } from 'ionicons/icons'
import LoadingEmoji from '../loadingPage/loadingEmoji/LoadingEmoji'
import {
  CHANGE_LANGUAGE,
  LS_LANGUAGE,
} from '../../redux-store/changeLanguage/changeLanguageConst'
import PopupBlock from '../popupBlock/PopupBlock'

gsap.config({ nullTargetWarn: false })

function Header(props) {
  const dispatch = useDispatch()
  const changeSideHeight = (prop) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: prop })
  }
  //=============================================================
  //handle header central text format and content
  const { centreText, main, explore, basic, article, articleRegion } = props

  // hook that handle navigation between pages
  const navigate = useNavigate()
  // state variable which we pass throught Link element
  const location = useLocation()

  const state = useSelector((state) => state)
  const user = state.user
  // current language
  const language = state.changeLanguage.lang
  const culture = state.culture
  // corelated emoji to category
  const emojiCategory = state.emojiCategory.emoji
  const corelateCategories = state.categoriesInfoBlock.corelate
  const corelateToCurrentLang = state.categoriesInfoBlock.corelateToCurrentLang
  // variable used for move side block with info
  const sideHeight = state.sideHeight.class
  // variable which contain selected oblast
  const selectedOblast = state.selectedOblast.selectedOblast
  // this is array which contain
  const aboutOblast = state.aboutOblast
  // width of screen
  const screenWidth = state.screenWidth.width
  //variable for text in  interface in different language
  const interfaceLang = state.interfaceLang[language]

  // ===========================================================
  //word used in class when user on particular page
  const activeWord = 'activePage'
  const [headerLeft_map, setHeaderLeft_map] = useState(activeWord)
  const [headerLeft_explore, setHeaderLeft_explore] = useState('')
  // variable used to show language box
  const [showLangBox, setshowLangBox] = useState(false)
  // reference to language drawer box
  const refShowLangBox = useRef()
  // reference to a buttom language drawer box
  const refBtnLang = useRef()

  // parent wrapper for animtion
  const wrapHead = useRef()
  // timeline for animation
  const tl = useRef()

  const BURGERHEIGHT = 'burgerHeight'
  const NO_BURGERHEIGHT = 'no_burgerHeight'
  // is burger menu active
  const [burgerHeight, setBurgerHeight] = useState('')
  // popup visibility
  const [isLangPopupVisible, setIsLangPopupVisible] = useState(false)
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
      const redionId = aboutOblast.getIndex(
        articleRegion,
        aboutOblast.aboutOblast,
      )
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
      return (
        <>
          <div className="mainHeader_oblastName">
            <div className="mainHeader_oblastName_email mainHeader_oblastName_el">
              {user.data.email}
            </div>
          </div>
        </>
      )
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
            <div
              onClick={() => setshowLangBox((el) => !el)}
              className="headerRight_language headerRight_el"
              ref={refBtnLang}
            >
              <IonIcon icon={globeOutline} className="profileIcon headerIcon" />
              <div>{culture.data[language].name}</div>
            </div>

            {/* how button to sign in if user not registered otherwise show profile button */}
            {user.data.role !== 'notuser' ? (
              <Link
                to="/profile"
                className="headerRight_profile headerRight_el"
              >
                <IonIcon
                  icon={personCircleOutline}
                  className="profileIcon headerIcon"
                />
                <div>{interfaceLang.profile}</div>
              </Link>
            ) : (
              <Link to="/login" className="headerRight_login headerRight_el">
                <IonIcon icon={enterOutline} className="loginIcon headerIcon" />
                <div>{interfaceLang.login}</div>
              </Link>
            )}

            {/* <Link
              to="/registration"
              className="headerRight_registration headerRight_el"
            >
              <div>{interfaceLang.registration}</div>
            </Link> */}
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

    // hide side height if not on mapSection
    if (location.pathname === '/') {
      // dispatch({type: CHANGE_SIDEHEIGHT, payload:SIDEHEIGHT})
    } else {
      dispatch({ type: CHANGE_SIDEHEIGHT, payload: NO_SIDEHEIGHT })
    }

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

  const LanguageChangeBlock = () => {
    return (
      <>
        <div className="header_LanguageChangeBlock">
          {culture.data.map((el, index) => {
            return (
              <div
                onClick={() => languageOptionClick(index)}
                key={el.id}
                className={`header_LanguageChangeBlock_el`}
              >
                {el.name}
              </div>
            )
          })}
        </div>
      </>
    )
  }

  const languageOptionClick = (index) => {
    setshowLangBox((el) => !el)
    navigate(0)
    localStorage.setItem(LS_LANGUAGE, index)
    dispatch({ type: CHANGE_LANGUAGE, payload: index })
  }

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

  // set position of language box drawer
  useEffect(() => {
    if (refShowLangBox.current) {
      // console.log('offset', refBtnLang.current.offsetLeft)
      let div = document.querySelector('.headerRight_language_drawer')
      div.style.transform = `translate(${
        refBtnLang.current.offsetLeft - 65
      }px, 0px)`

      div.style.top = '-10px'
    }
  }, [showLangBox])

  return (
    <>
      {!culture.loading ? (
        <>
          {/* language popup */}
          {showLangBox ? (
            <div
              className="headerRight_language_drawer"
              ref={refShowLangBox}
              onMouseLeave={() => setshowLangBox((el) => !el)}
            >
              {culture.data.map((el, index) => {
                return (
                  <div
                    onClick={() => languageOptionClick(index)}
                    key={el.id}
                    className={`headerRight_language_drawer_el`}
                  >
                    {el.name}
                  </div>
                )
              })}
            </div>
          ) : null}

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

          {screenWidth >= ADAPTIVE_S_1 ? null : (
            <>
              {isLangPopupVisible ? (
                <PopupBlock setIsVisible={setIsLangPopupVisible}>
                  <LanguageChangeBlock />
                </PopupBlock>
              ) : null}

              <div className={`headerSection_burgerBackground ${burgerHeight}`}>
                <div className="headerSection_burgerBackground_navigation">
                  <div className="headerSection_burgerBackground_navigation_top">
                    <div onClick={()=>{setIsLangPopupVisible(el=>!el)}} className="headerLeft_language">
                      <IonIcon
                        icon={globeOutline}
                        className="profileIcon headerIcon"
                      />
                      <div>{culture.data[language].name}</div>
                    </div>

                    {user.data.role === 'notuser' ? (
                      <div className="headerLeft_profile">
                        <Link
                          className={`headerLeft_profile_link`}
                          to="/login"
                        >
                          <div className={`headerLeft_profile_wrap`}>
                            <IonIcon
                              icon={enterOutline}
                              className="headerLeft_map_navs_icon"
                            />
                            <div className="headerLeft_map_navs_text">
                              {interfaceLang.login}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div className="headerLeft_profile">
                        <Link
                          className={`headerLeft_profile_link`}
                          to="/profile"
                        >
                          <div className={`headerLeft_profile_wrap`}>
                            <IonIcon
                              icon={personCircleOutline}
                              className="headerLeft_map_navs_icon"
                            />
                            <div className="headerLeft_map_navs_text">
                              {interfaceLang.profile}
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
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
            </>
          )}
        </>
      ) : null}
    </>
  )
}

export default React.memo(Header)
