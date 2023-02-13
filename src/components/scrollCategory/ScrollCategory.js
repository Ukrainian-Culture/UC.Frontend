import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_FILTER } from '../../redux-store/selectedCategory/selectedCategoryConst'
import '../scrollCategory/scrollCategory.scss'
import axios from 'axios'

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
  const interfaceLang = store.interfaceLang;
  // corelated emoji to category
  const emojiCategory = store.emojiCategory.emoji
  const corelateCategories = store.categoriesInfoBlock.corelate

  // filter category name
  // const [filterCategory, setFilterCategory] = useState('all')s

  const tl = useRef()
  const tl_hover = useRef()
  const wrapScrollCategory = useRef()
  // =====================================

  // ------------------------------------

  const animationOnHoverCategory = (e) => {
    const ctx = gsap.context(() => {
      tl_hover.current = gsap
        .timeline()
        .to('.scrollCategory_el_p', { y: -5, stagger: 0.08, duration: 0.3 })
    }, e.target)

    return () => ctx.revert()
  }

  const animationLeaveHoverCategory = () => {
    const ctx = gsap.context(() => {
      tl_hover.current.reverse()
    })
    return () => ctx.revert()
  }

  return (
    <div className="scrollCategory" ref={wrapScrollCategory}>
      <div className="scrollCategory_wrap">


        <div className="scrollCategory_el_wrapp"        >
          <input
           // onChange={}
            type="text"
            className="scrollCategory_el "
            placeholder={`${emojiCategory["search"]}` + interfaceLang[language].search}
          />
        </div>

        {store.categoriesInfoBlock[language].map((el, index) => {
          return (
            <div
              onClick={() => {
                changeFilter(corelateCategories(el, language))
              }}
              onMouseEnter={(e) => animationOnHoverCategory(e)}
              onMouseLeave={(_) => animationLeaveHoverCategory()}
              className="scrollCategory_el_wrapp"
              key={`srccat_${index}`}
            >
              <div className="scrollCategory_el">
                <p className="scrollCategory_el_p scrollCategory_el_emoji">
                  {`${emojiCategory[corelateCategories(el, language)]}`}
                </p>
                <p className="scrollCategory_el_p scrollCategory_el_category">{`${el}`}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default React.memo(ScrollCategory)
