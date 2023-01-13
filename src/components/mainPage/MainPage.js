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

function MainPage() {
  const dispatch = useDispatch()
  // changin variable which help to handle size of 3D map
  const changeScreenWidth = (param) => {
    dispatch({ type: CHANGE_SCREENWIDTH, payload: param })
  }
  // ==================================================
  const state = useSelector((state) => state)
  const selectedOblast = state.selectedOblast.selectedOblast


  // variable which contain referense on main screen block
  const refWidth = useRef()

  useEffect(() => {
    const screenWidth = state.screenWidth.width
    if (screenWidth === 0) changeScreenWidth(refWidth.current.offsetWidth)

    const changeEvent = () => {

      if (screenWidth === 0) changeScreenWidth(refWidth.current.offsetWidth)
      else {
        // console.log(screenWidth, '%%%%%%%%%%%%%%%%%')
        changeScreenWidth(refWidth.current.offsetWidth)
      }
      
    }

    window.addEventListener('resize', changeEvent)

    return () => {
      window.removeEventListener('resize', changeEvent)
    }
  }, [state])

  return (
    <div className="mainPage" ref={refWidth}>
      <div className="container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Header centreText={selectedOblast} main={true} />
      <InfoBlock />

      <div className="mainPage_scrollWrap" id="mainPage_scrollWrap">
        <div className="mainPage_scrollWrap_el">
          <MapSection />
        </div>
        {/* <div className='mainPage_scrollWrap_el'><IntroducingCategory /></div> */}
        <div className="mainPage_scrollWrap_el">
          <h1>{state.screenWidth.width}</h1>
          <StatisticSection />
        </div>
      </div>
    </div>
  )
}

export default MainPage
