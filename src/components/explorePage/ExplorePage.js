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
import LoadingPlates from '../loadingPage/loadingPlates/LoadingPlates'
import { type } from '@testing-library/user-event/dist/type'
import { SEARCH_CHANGE } from '../../redux-store/search/searchConst'
import { search } from 'ionicons/icons'

function ExplorePage() {
  const state = useSelector((state) => state)
  // fetched array with articles
  const [articleArr, setArticleArr] = useState(state.fetchExplore.arr)
  const [searchArr, setSearchArr] = useState([])
  // current language
  const language = state.changeLanguage.lang
  // filter category
  const [filterCategory, setFilterCategory] = useState(
    state.selectedCategory.filter,
  )


  const fetchExplore = state.fetchExplore
  const domain = state.startSettings.domain
  const theme = state.startSettings.theme
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

  const getPlatesArr = () => {
    return state.search.data === '' ? fetchExplore.data : searchArr
  }

  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!culture.loading) {
      const loc_lang = `${state.culture.data[language]['id']}`
      const urlExplore = `${domain}/api/${loc_lang}/ArticlesTile`

      axios
        .get(urlExplore)
        .then((responce) => {
          dispatch({ type: FETCH_EXPLORE_SUCCESS, payload: responce.data })
        })
        .catch((e) => {
          dispatch({ type: FETCH_EXPLORE_ERROR, error: e })
        })
    }
  }, [culture])

  useEffect(() => {
    if (state.search.data !== '') {
      const url = `${state.startSettings.domain}/api/Search/articleTiles/${culture.data[language]?.id}/${state.search.data}`
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
          setSearchArr(res)
        })
    }
  }, [state.search.data])

  /////////////////////////////////////////////////////////////////////

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
      <LoadingPage main={true} />

      <div className={`explorePage ${theme}`} ref={exploreWrap}>
        <div className=" explorePage_wrap">
          <div className="explorePage_header">
            <Header centreText={filterCategory} explore={true} />
          </div>

          <div className="explorePage_scrollCategory">
            <ScrollCategory />
          </div>

          {!fetchExplore.loading &&
          fetchExplore.error === '' &&
          typeof getPlatesArr() !== 'undefined' &&
          getPlatesArr().length !== 0? (
            <div className="explorePage_mainPlates">
              {getPlatesArr().map((el, index) => {
                if (
                  categoryToDisplay().includes(el.category.toLowerCase()) ||
                  filterCategory == 'all'
                ) {
                  return (
                    <Card el={el} key={`EPMP__${index}_${state.search.data}`} />
                  )
                }
              })}
            </div>
          ) : (
            <LoadingPlates explore={true} />
            // <LoadingEmoji />
          )}
        </div>
      </div>
    </>
  )
}

export default React.memo(ExplorePage)
