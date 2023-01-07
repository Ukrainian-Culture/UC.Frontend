import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_FILTER } from '../../redux-store/selectedCategory/selectedCategoryConst'
import '../scrollCategory/scrollCategory.scss'

function ScrollCategory() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to change name of category filter
  const changeFilter = (param) => {
    dispatch({ type: CHANGE_FILTER, payload: `${param}` })
  }
  //-------------------------------------------------------------
  const store = useSelector((state) => state)
  // current id of language
  const language = store.changeLanguage.lang
  // corelated emoji to category
  const emojiCategory = store.emojiCategory.emoji
  const corelateCategories = store.categoriesInfoBlock.corelate
  const [categories, setCategories] = useState([
    
    ...store.categoriesInfoBlock[language],
  ])
  // filter category name
  // const [filterCategory, setFilterCategory] = useState('all')s

  const tl = useRef()
  const wrapScrollCategory = useRef()
  // =====================================


  // ------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap
        .timeline()
        .from('.scrollCategory_el', { opacity: 0, y: -25, stagger: 0.03 })
    }, wrapScrollCategory)
    

    return () => ctx.revert()
  }, [])

  

  return (
    <div className="scrollCategory" ref={wrapScrollCategory}>
      <div className="scrollCategory_wrap">
        {categories.map((el, index) => {
          return (
            <div
              onClick={() => {
                changeFilter(corelateCategories(el, language))
              }}
              className="scrollCategory_el"
              key={`srccat_${index}`}
            >
              <p className="scrollCategory_el_p scrollCategory_el_emoji">{`${emojiCategory[corelateCategories(el, language)]}`}</p>
              <p className="scrollCategory_el_p scrollCategory_el_category">{`${el}`}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScrollCategory
