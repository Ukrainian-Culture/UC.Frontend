import React from 'react'
import '../mainPage/mainPage.scss'
import Header from '../header/Header'
import InfoBlock from '../header/infoBlock/InfoBlock'
import MapSection from '../mapSection/MapSection'
import Explore from '../explorePage/ExplorePage'
import StatisticSection from '../statisticSection/StatisticSection'

function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <InfoBlock />
      <MapSection />
      <StatisticSection/>
    </div>
  )
}

export default MainPage
