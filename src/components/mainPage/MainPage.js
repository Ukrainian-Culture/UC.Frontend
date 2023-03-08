import React, { useEffect, useRef, useState } from 'react'
import '../mainPage/mainPage.scss'
import '../../settings/settings.scss'
import Header from '../header/Header'
import InfoBlock from '../header/infoBlock/InfoBlock'
import MapSection from '../mapSection/MapSection'
import Explore from '../explorePage/ExplorePage'
import StatisticSection from '../statisticSection/StatisticSection'
import { useDispatch, useSelector } from 'react-redux'
import IntroducingCategory from '../introdusingCategory/IntroducingCategory'
import { CHANGE_SCREENWIDTH } from '../../redux-store/screenWidth/screenWidthConst'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import Subscription from '../subscription/Subscription'
import Footer from '../footer/Footer'
import LoadingPage from '../loadingPage/LoadingPage'
import GradientBackground from '../gradientBackground/GradientBackground'
import StartAppRequests from '../../hooks/StartAppRequests'
import UserOnline from '../../hooks/UserOnline'
import GradientCircle from '../gradientBackground/gradientCircle/GradientCircle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATISTIC_TRIGGER } from '../../redux-store/startSettings/startSettingsReducerConst'
gsap.registerPlugin(ScrollTrigger)

function MainPage() {
  const dispatch = useDispatch()
  // changin variable which help to handle size of 3D map
  const changeScreenWidth = (param) => {
    dispatch({ type: CHANGE_SCREENWIDTH, payload: param })
  }
  const changeEnterStatistic = (param) => {
    dispatch({ type: STATISTIC_TRIGGER, payload: param })
  }
  // ==================================================
  const state = useSelector((state) => state)
  const selectedOblast = state.selectedOblast.selectedOblast

  // variable which contain referense on main screen blocks
  const refWidth = useRef()

  const tl = useRef()
  const mainRef = useRef()

  // ---------------------------------------------------------

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap.timeline().to('.statisticSection', {
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: '.mainPage_scrollWrap_el_statistic',
          start: 'center 70%',
          // markers: true,
          onEnter: () => {
            console.log('trigger work')
            changeEnterStatistic(true)
          },
        },
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })
  return (
    <>
      <UserOnline />
      <StartAppRequests />
      <LoadingPage main={true} />

      <div className="mainPage" ref={refWidth}>
        <GradientCircle colorClass={'registration'} />

        <Header centreText={selectedOblast} main={true} />
        <InfoBlock />

        <div
          className="mainPage_scrollWrap"
          id="mainPage_scrollWrap"
          ref={mainRef}
        >
          <div className="mainPage_scrollWrap_el mainPage_scrollWrap_el_map">
            <MapSection />
          </div>
          {/* <div className='mainPage_scrollWrap_el'><IntroducingCategory /></div> */}
          <div className="mainPage_scrollWrap_el mainPage_scrollWrap_el_statistic">
            {/* <h1>{state.screenWidth.width}</h1> */}
            <StatisticSection />
          </div>
          <div className="mainPage_scrollWrap_el mainPage_scrollWrap_el_subscription">
            <Subscription />
          </div>
          <div className="mainPage_scrollWrap_el">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
