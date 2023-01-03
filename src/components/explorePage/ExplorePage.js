import React, { useEffect, useRef, useState } from 'react'
import '../explorePage/explorePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  NO_SIDEHEIGHT,
  CHANGE_SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'
import stopScroll from '../../hooks/scrolHandler'
import Header from '../header/Header'
import Card from '../card/Card'
import ScrollCategory from '../scrollCategory/ScrollCategory'
import gsap from 'gsap'

function ExplorePage() {
  const state = useSelector((state) => state)
  // fetched array with articles
  const [articleArr, setArticleArr] = useState(state.fetchExplore.arr)
  // filter category
  const [filterCategory, setFilterCategory] = useState(
    state.selectedCategory.filter,
  )

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

  // change do filtration when selected filtration category
  useEffect(()=>{
    setFilterCategory(state.selectedCategory.filter)
  },[state.selectedCategory.filter])

  useEffect(() => {
    changeSideHeight('')
    stopScroll('static')
  }, [])

  // animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap.timeline().from('.cardBlock', {
        y: -20,
        opacity:0,
        stagger: 0.02,
      })
    }, exploreWrap)

    return () => ctx.revert()
  }, [])

  return (
    <div className="explorePage" ref={exploreWrap}>
      <div className="explorePage_header">
        <Header />
      </div>

      <div className="explorePage_scrollCategory">
        <ScrollCategory />
      </div>

      <div className="explorePage_mainPlates">
        {articleArr.map((el, index) => {
          if (categoryToDisplay().includes(el.category) || filterCategory == 'all') {
            return (
              <Card
                key={`epmp_${index}`}
                title={el.date}
                subText="Ukrainian dumplings made from potato and wheet dought with creem"
                category={el.category}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ExplorePage
