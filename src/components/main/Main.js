import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux-store/reduxStore'
import Header from '../header/Header'
import InfoBlock from '../header/infoBlock/InfoBlock'
import MapSection from '../mapSection/MapSection'
import '../main/main.scss'

function Main() {
  return (
    <Provider store={store}>
      <div className="mainScript">
        <Header/>
        <InfoBlock/>
        <MapSection />
      </div>
    </Provider>
  )
}

export default Main
