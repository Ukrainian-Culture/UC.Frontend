import React, { useEffect, useRef, useState } from 'react'
import '../explorePage/explorePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  NO_SIDEHEIGHT,
  CHANGE_SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'
import Header from '../header/Header'
import Card from '../card/Card'
import ScrollCategory from '../scrollCategory/ScrollCategory'
import gsap from 'gsap'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import axios from 'axios'
import {
  FETCH_EXPLORE_ERROR,
  FETCH_EXPLORE_SUCCESS,
} from '../../redux-store/fetchExplore/fetchExploreConst'
import LoadingEmoji from '../loadingPage/loadingEmoji/LoadingEmoji'
import StartAppRequests from '../../hooks/StartAppRequests'
import LoadingPage from '../loadingPage/LoadingPage'

function ExplorePage() {
  const state = useSelector((state) => state)
  // fetched array with articles
  const [articleArr, setArticleArr] = useState(state.fetchExplore.arr)
  // current language
  const language = state.changeLanguage.lang
  // filter category
  const [filterCategory, setFilterCategory] = useState(
    state.selectedCategory.filter,
  )

  const fetchExplore = state.fetchExplore
  const domain = state.startSettings.domain
  const categoryLocale = state.categoryLocale
  const culture = state.culture

  // timeline for animation
  const tl = useRef()
  const exploreWrap = useRef()
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to close side height
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }
  //-------------------------------------------------------------

  // returns array of filters catefories
  function categoryToDisplay() {
    if (filterCategory === 'culture') return ['music', 'dishes']
    else return filterCategory
  }

  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    const urlExplore = `${domain}/api/${state.culture.data['en']}/ArticlesTile`

    axios
      .get(urlExplore)
      .then((responce) => {
        dispatch({ type: FETCH_EXPLORE_SUCCESS, payload: responce.data })
      })
      .catch((e) => {
        dispatch({ type: FETCH_EXPLORE_ERROR, error: e })
      })
  }, [state.culture])
  ///////////////////////////////////////////////////////////////

  // change do filtration when selected filtration category
  useEffect(() => {
    setFilterCategory(state.selectedCategory.filter)
  }, [state.selectedCategory.filter])

  useEffect(() => {
    changeSideHeight('')
  }, [])

  // animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap.timeline().from('.cardBlock', {
        y: -20,
        opacity: 0,
        stagger: 0.02,
      })
    }, exploreWrap)

    return () => ctx.revert()
  }, [])

  // getting screen size from current page
  useGetScreenWidth({ refWidth: exploreWrap })

  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true}/>

      <div className="explorePage" ref={exploreWrap}>
        <div className=" explorePage_wrap">
          <div className="explorePage_header">
            <Header centreText={filterCategory} explore={true} />
          </div>

          <div className="explorePage_scrollCategory">
            <ScrollCategory />
          </div>

          <div className="explorePage_mainPlates">
            {!fetchExplore.loading ? (
              fetchExplore.data.map((el, index) => {
                if (
                  categoryToDisplay().includes(el.category.toLowerCase()) ||
                  filterCategory == 'all'
                ) {
                  return (
                    <Card
                    el={el}
                      key={`epmp_${index}`}
                      title={el.title}
                      subText="Ukrainian dumplings made from potato and wheet dought with creem"
                      category={el.category.toLowerCase()}
                    />
                  )
                }
              })
            ) : (
              <LoadingEmoji />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(ExplorePage)
