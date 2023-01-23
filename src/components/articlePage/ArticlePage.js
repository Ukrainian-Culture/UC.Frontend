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
import {saveAs} from "file-saver"
import PDFFormer from '../pdfFormer/PDFFormer'

function ArticlePage() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to close side height
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }

  const state = useSelector((state) => state)
  
  //-------------------------------------------------------------

  // hook that handle navigation between pages
  const navigate = useNavigate()

  // parameter which we pass throught url
  const { id } = useParams()
  // state variable which we pass throught Link element
  const location = useLocation()
  const [startLoad, setStartLoad] = useState(false)
  const [openDownloadCard, setDownloadCard] = useState(false)

  // redirect to previous page when button "back" pressed
  function backClick() {
    navigate(-1)
  }
  // ===========================================================


  const downloadPDF = async () => {
    setStartLoad(true)

    const blob = await pdf(
      <PDFFormer data={location.state}/>
    ).toBlob()

    // console.log(blob)

    saveAs(blob, 'pageName')
  }

  function DonwloadCard() {
    return <></>
  }

  // -----------------------------------------------------------
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

          <div className="articlePage_wrap_navigation_helpers">
            <div
              className="articlePage_wrap_navigation_helpers_download"
              onClick={() => {
                downloadPDF()
              }}
            >
              download
              {/* {
                startLoad ? <PDFDownloadLink document={<PDFFormer />} fileName={"FORM"}>
                {({ loading }) => (loading ? 'loading...' : <div>dick</div>)}
              </PDFDownloadLink>
              :null
              } */}
            </div>
          </div>
        </div>
        <div className="articlePage_wrap_navigation_title">
          ARTICLE PAGE - {id}
        </div>
        <div className="articlePage_wrap_content">
          <div className="articlePage_wrap_content_side"></div>
          <div className="articlePage_wrap_content_text">
            {location.state.shortDesc.repeat(100) || 'no content'}
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
