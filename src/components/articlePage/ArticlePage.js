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
import StartAppRequests from '../../hooks/StartAppRequests'
import LoadingPage from '../loadingPage/LoadingPage'
import Subscription from '../subscription/Subscription.js'

function ArticlePage() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to close side height
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }

  const symbolLimit = 3500
  const state = useSelector((state) => state)

  // current language
  const language = state.changeLanguage.lang

  const user = state.user
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
  //  const { articleId, title, subText, category, region } = location.state.el
  const [endtLoad, setEndLoad] = useState(false)
  const [openDownloadCard, setDownloadCard] = useState(false)

  // const [articleContent, setArticleContent] = useState()
  const [test, setTest] = useState([])

  // used to to show or hide proposal to read entire text
  const [ShowDeprecation, setShowDeprecation] = useState(false)

  // ===========================================================

  // redirect to previous page when button "back" pressed
  function backClick() {
    navigate(-1)
  }

  const formatingContent = () => {
    return user.data.role !== 'notuser'
      ? fetchArticle.data.content || 'no content 🤯'
      : `${fetchArticle.data.content.slice(0, symbolLimit)} ` || 'no content 🤯'
  }

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    // console.log('oh shit', articleId, id)

    if (!culture.loading && !endtLoad) {
      const loc_id = location.pathname.replace('/article/', '')

      const loc_lang = `${state.culture.data[language]['id']}`
      const urlArticle = `${domain}/api/${loc_lang}/ArticlesLocale/${loc_id}`

      axios
        .get(urlArticle)
        .then((responce) => {
          dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: responce.data })
          // console.log(responce.data)

          // write viewed article to database
          // addArticleToHistory(responce.data)

          setEndLoad(true)
        })
        .catch((e) => {
          dispatch({ type: FETCH_ARTICLE_ERROR, error: e })
        })

      // setTest((el) => {
      //   if (el.length === 0) console.log(el)

      //   return [...el, '1']
      // })
    }
  }, [culture])
  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    changeSideHeight('')
    // resume scroll when selected some region
    // stopScroll("hidden")
  }, [])

  useEffect(() => {
    if (!fetchArticle.loading &&fetchArticle?.data?.content.length >= symbolLimit) setShowDeprecation(true)
  }, [fetchArticle?.data?.content])

  // variable which contain referense on main screen blocks
  const refWidth = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: refWidth })

  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      {!fetchArticle.loading ? (
        <div className="articlePage" ref={refWidth}>
          <Header article={true} articleRegion={fetchArticle.data.region} />
          <div className="articlePage_wrap">
            <div className="articlePage_wrap_navigation">
              <div
                className="articlePage_wrap_navigation_back"
                onClick={() => backClick()}
              >
                <div className="articlePage_wrap_navigation_back_el"></div>
                <div className="articlePage_wrap_navigation_back_el">
                  {interfaceLang.back}
                </div>
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
              {fetchArticle.data.title}
            </div>
            <div className="articlePage_wrap_content">
              <div className="articlePage_wrap_content_side"></div>
              <div className="articlePage_wrap_content_text">
                <div className="articlePage_wrap_content_text_main">
                  {formatingContent()}
                </div>

                {user.data.role === 'notuser' && ShowDeprecation ? (
                  <>
                    <div className="articlePage_wrap_content_text_deprecated_wrapper">
                      <div className="articlePage_wrap_content_text_deprecated">
                        <Subscription linkToReg={true} />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <div className="articlePage_wrap_content_side"></div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default React.memo(ArticlePage)

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
