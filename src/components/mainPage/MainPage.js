import React, { useEffect, useRef } from 'react'
import '../mainPage/mainPage.scss'
import Header from '../header/Header'
import InfoBlock from '../header/infoBlock/InfoBlock'
import MapSection from '../mapSection/MapSection'
import Explore from '../explorePage/ExplorePage'
import StatisticSection from '../statisticSection/StatisticSection'
import { useDispatch, useSelector } from 'react-redux'
import IntroducingCategory from '../introdusingCategory/IntroducingCategory'
import { CHANGE_SCREENWIDTH } from '../../redux-store/screenWidth/screenWidthConst'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import LoadingPage from '../loadingPage/LoadingPage'
import GradientBackground from '../gradientBackground/GradientBackground'
import StartAppRequests from '../../hooks/StartAppRequests'

function MainPage() {
  const dispatch = useDispatch()
  // changin variable which help to handle size of 3D map
  const changeScreenWidth = (param) => {
    dispatch({ type: CHANGE_SCREENWIDTH, payload: param })
  }
  // ==================================================
  const state = useSelector((state) => state)
  const selectedOblast = state.selectedOblast.selectedOblast

  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })

  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      <div className="mainPage" ref={refWidth}>
        <GradientBackground />

        <Header centreText={selectedOblast} main={true} />
        <InfoBlock />

        <div className="mainPage_scrollWrap" id="mainPage_scrollWrap">
          <div className="mainPage_scrollWrap_el">
            <MapSection />
          </div>
          {/* <div className='mainPage_scrollWrap_el'><IntroducingCategory /></div> */}
          <div className="mainPage_scrollWrap_el">
            {/* <h1>{state.screenWidth.width}</h1> */}
            <StatisticSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
