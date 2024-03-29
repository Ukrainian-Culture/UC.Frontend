import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_FILTER } from '../../redux-store/selectedCategory/selectedCategoryConst'
import '../scrollCategory/scrollCategory.scss'
import axios from 'axios'
import {
  SEARCH_CHANGE,
  SEARCH_CLEAR_SWAP,
} from '../../redux-store/search/searchConst'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { IonIcon } from '@ionic/react'
import { globeOutline, closeOutline } from 'ionicons/icons'

function ScrollCategory() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to change name of category filter
  const changeFilter = (param) => {
    dispatch({ type: CHANGE_FILTER, payload: `${param}` })
  }
  const changeSearchText = (val) => {
    dispatch({ type: SEARCH_CHANGE, payload: val })
  }

  //-------------------------------------------------------------

  const store = useSelector((state) => state)
  // current id of language
  const language = store.changeLanguage.lang
  const culture = store.culture
  const interfaceLang = store.interfaceLang
  // corelated emoji to category
  const emojiCategory = store.emojiCategory.emoji
  const corelateCategories = store.categoriesInfoBlock.corelate

  const search = store.search.data

  const tl = useRef()
  const tl_hover = useRef()
  const wrapScrollCategory = useRef()

  const [searchFocus, setSearchFocus] = useState(false)
  const searchRef = useRef()

  const activeWord = 'activeCategory'
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

  useEffect(() => {
    wrapScrollCategory.current.style.overflow = searchFocus ? 'hidden' : 'auto'
  }, [searchFocus])

  return (
    <div className="scrollCategory">
      <div className="scrollCategory_wrap" ref={wrapScrollCategory}>
        <div
          onClick={() => {
            setSearchFocus(true)
            searchRef.current && searchRef.current.focus()
          }}
          className={`scrollCategory_el_wrapp scrollCategory_el_wrapp_search scrollCategory_el_wrapp_search_${searchFocus}`}
        >
          <input
            ref={searchRef}
            value={search || ''}
            onChange={(e) => changeSearchText(e.target.value)}
            type="text"
            className="scrollCategory_el scrollCategory_el_search"
            placeholder={`${emojiCategory['search']} ${interfaceLang[language].search}`}
          />
          <div
            className={`scrollCategory_el_ scrollCategory_el_${searchFocus}`}
          >
            <IonIcon
              onClick={(e) => {
                e.stopPropagation()
                setSearchFocus(false)
                changeSearchText('')
              }}
              icon={closeOutline}
            />
          </div>
        </div>

        {store.categoriesInfoBlock[language].map((el, index) => {
          return (
            <div
              onClick={() => {
                changeFilter(corelateCategories(el, language))
              }}
              onMouseEnter={(e) => animationOnHoverCategory(e)}
              onMouseLeave={(_) => animationLeaveHoverCategory()}
              className={`scrollCategory_el_wrapp scrollCategory_el_wrapp_${
                corelateCategories(el, language) ===
                store.selectedCategory.filter
                  ? activeWord
                  : ''
              }`}
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
    </div>
  )
}

export default React.memo(ScrollCategory)
