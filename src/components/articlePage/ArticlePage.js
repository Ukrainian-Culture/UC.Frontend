import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  NO_SIDEHEIGHT,
  CHANGE_SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'
import stopScroll from "../../hooks/scrolHandler"
import '../articlePage/articlePage.scss'
import Header from '../header/Header'

function ArticlePage() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to close side height
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }
  //-------------------------------------------------------------

  // hook that handle navigation between pages
  const navigate = useNavigate()

  // parameter which we pass throught url
  const { id } = useParams()
  // state variable which we pass throught Link element
  const location = useLocation()

  // ===========================================================

  // redirect to previous page when button "back" pressed
  function backClick(){
    navigate(-1);
  }

  useEffect(() => {
    changeSideHeight("")
    stopScroll("static")
  }, [])

  return (
    <div className="articlePage">
      <Header/>
      <div className="articlePage_wrap">
        <div className="articlePage_wrap_navigation">
          <div className="articlePage_wrap_navigation_back" onClick={()=>backClick()}>back</div>
          <div className="articlePage_wrap_navigation_title">
            ARTICLE PAGE - {id}
          </div>
          <div className="articlePage_wrap_navigation_helpers">helpers</div>
        </div>
        <div className="articlePage_wrap_content">
          <div className="articlePage_wrap_content_side"></div>
          <div className="articlePage_wrap_content_text">
          {location.state}
          </div>
          <div className="articlePage_wrap_content_side"></div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
