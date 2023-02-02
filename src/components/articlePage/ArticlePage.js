import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  NO_SIDEHEIGHT,
  CHANGE_SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'
import stopScroll from '../../hooks/scrolHandler'
import '../articlePage/articlePage.scss'
import Header from '../header/Header'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import { PDFDownloadLink, pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import PDFFormer from '../pdfFormer/PDFFormer'
import axios from 'axios'
import {
  FETCH_ARTICLE_ERROR,
  FETCH_ARTICLE_SUCCESS,
} from '../../redux-store/fetchArticle/fetchArticleConst'

function ArticlePage() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to close side height
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }

  const state = useSelector((state) => state)

  // current language
  const language = state.changeLanguage.lang
  const fetchArticle = state.fetchArticle
  const domain = state.startSettings.domain
  const categoryLocale = state.categoryLocale
  const culture = state.culture
  //variable for text in  interface in different language
  const interfaceLang = state.interfaceLang[language]

  //-------------------------------------------------------------

  // hook that handle navigation between pages
  const navigate = useNavigate()

  // parameter which we pass throught url
  const { id } = useParams()
  // state variable which we pass throught Link element
  const location = useLocation()
  const { articleId, title, subText, category, region } = location.state.el
  const [startLoad, setStartLoad] = useState(false)
  const [openDownloadCard, setDownloadCard] = useState(false)

  // redirect to previous page when button "back" pressed
  function backClick() {
    navigate(-1)
  }
  // ===========================================================

  const downloadPDF = async () => {
    setStartLoad(true)

    const blob = await pdf(<PDFFormer {...location.state.el} content={fetchArticle.data.content} />).toBlob()

    // console.log(blob)

    saveAs(blob, 'pageName')
  }

  function DonwloadCard() {
    return <></>
  }

  // -----------------------------------------------------------

  //////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!culture.loading) {
      const loc_lang = `${state.culture.data[1]['id']}`
      const urlArticle = `${domain}/api/${loc_lang}/ArticlesLocale/${articleId}`

      axios
        .get(urlArticle)
        .then((responce) => {
          dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: responce.data })
        })
        .catch((e) => {
          dispatch({ type: FETCH_ARTICLE_ERROR, error: e })
        })
    }
  }, [])
  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    changeSideHeight('')
    // resume scroll when selected some region
    // stopScroll("hidden")
  }, [])

  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })

  return (
    <div className="articlePage" ref={refWidth}>
      <Header article={true} articleRegion={region} />
      <div className="articlePage_wrap">
        <div className="articlePage_wrap_navigation">
          <div
            className="articlePage_wrap_navigation_back"
            onClick={() => backClick()}
          >
            <div className="articlePage_wrap_navigation_back_el"></div>
            <div className="articlePage_wrap_navigation_back_el">{interfaceLang.back}</div>
          </div>

          <div className="articlePage_wrap_navigation_helpers">
            {/* <div
              className="articlePage_wrap_navigation_helpers_download"
              onClick={() => {
                downloadPDF()
              }}
            >
              download
              {
                startLoad ? <PDFDownloadLink document={<PDFFormer />} fileName={"FORM"}>
                {({ loading }) => (loading ? 'loading...' : <div>dick</div>)}
              </PDFDownloadLink>
              :null
              }
            </div> */}
            
          </div>
        </div>
        <div className="articlePage_wrap_navigation_title">
          {title || fetchArticle.data.title}
        </div>
        <div className="articlePage_wrap_content">
          <div className="articlePage_wrap_content_side"></div>
          <div className="articlePage_wrap_content_text">
            {fetchArticle.data.content || 'no content 🤯'}
          </div>
          <div className="articlePage_wrap_content_side"></div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage

{
  /* <div className="articlePage" ref={refWidth}>
      <Header basic={true} />
      <div className="articlePage_wrap">
        <div className="articlePage_wrap_navigation">
          <div
            className="articlePage_wrap_navigation_back"
            onClick={() => backClick()}
          >
            <div className="articlePage_wrap_navigation_back_el"></div>
            <div className="articlePage_wrap_navigation_back_el">back</div>
          </div>
          <div className="articlePage_wrap_navigation_title">
            ARTICLE PAGE - {id}
          </div>
          <div className="articlePage_wrap_navigation_helpers">helpers</div>
        </div>
        <div className="articlePage_wrap_content">
          <div className="articlePage_wrap_content_side"></div>
          <div className="articlePage_wrap_content_text">{location.state.shortDesc || "no content"}</div>
          <div className="articlePage_wrap_content_side"></div>
        </div>
      </div>
    </div> */
}
