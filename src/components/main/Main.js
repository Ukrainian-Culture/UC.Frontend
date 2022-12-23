import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux-store/reduxStore'
import '../main/main.scss'
import MapSection from '../mapSection/MapSection'

function Main() {
  return (
    <Provider store={store}>
      <div className="mainScript">
        {/* Main(test) */}
        <MapSection />
      </div>
    </Provider>
  )
}

export default Main
