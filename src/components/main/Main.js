import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux-store/reduxStore'
import { Routes, Route } from 'react-router-dom'
import '../main/main.scss'
import MainPage from '../mainPage/MainPage'
import ExplorePage from '../explorePage/ExplorePage'
import ArticlePage from '../articlePage/ArticlePage'
import NotFoundPage from '../notFoundPage/NotFoundPage'
import StartAppRequests from '../../hooks/StartAppRequests'
import Profile from '../profile/Profile'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import SubscriptionPage from '../subscription/SubscriptionPage/SubscriptionPage'
import ConfirmEmailPage from '../ConfirmEmailPage/ConfirmEmailPage'

function Main() {
  return (
    <>
      <Provider store={store}>
        <div className="mainScript">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/confirm" element={<ConfirmEmailPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Provider>
    </>
  )
}

export default Main
