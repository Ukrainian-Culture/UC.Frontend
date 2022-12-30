import React from 'react'
import '../mainPage/mainPage.scss'
import Header from '../header/Header'
import InfoBlock from '../header/infoBlock/InfoBlock'
import MapSection from '../mapSection/MapSection'
import Explore from '../explorePage/ExplorePage'

function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <InfoBlock />
      <MapSection />
    </div>
  )
}

export default MainPage
