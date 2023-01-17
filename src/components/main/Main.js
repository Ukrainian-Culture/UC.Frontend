import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux-store/reduxStore'
import { Routes, Route } from 'react-router-dom'
import '../main/main.scss'
import MainPage from '../mainPage/MainPage'
import ExplorePage from '../explorePage/ExplorePage'
import ArticlePage from '../articlePage/ArticlePage'
import NotFoundPage from '../notFoundPage/NotFoundPage'

function Main() {


  
  return (
    <>
      <Provider store={store}>
        <div className="mainScript">
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Provider>
    </>
  )
}

export default Main
