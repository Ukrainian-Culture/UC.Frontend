import React from 'react'
import '../mainPage/mainPage.scss'
import Header from '../header/Header'
import InfoBlock from '../header/infoBlock/InfoBlock'
import MapSection from '../mapSection/MapSection'
import Explore from '../explorePage/ExplorePage'
import StatisticSection from '../statisticSection/StatisticSection'
import { useSelector } from 'react-redux'
import IntroducingCategory from '../introdusingCategory/IntroducingCategory'

function MainPage() {
  const selectedOblast = useSelector(state => state.selectedOblast.selectedOblast)
  return (
    <div className="mainPage">
      <div className='container'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Header centreText={selectedOblast} main={true}/>
      <InfoBlock />
      <MapSection />
      <IntroducingCategory/>
      <StatisticSection/>
    </div>
  )
}

export default MainPage
