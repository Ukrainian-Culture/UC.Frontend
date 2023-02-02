import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_HISTORY_ERROR,
  FETCH_HISTORY_SUCCESS,
} from '../../../redux-store/fetchHistory/fetchHistoryConst'
import {
  FETCH_DISHES_ERROR,
  FETCH_DISHES_SUCCESS,
  FETCH_MUSIC_ERROR,
  FETCH_MUSIC_SUCCESS,
  FETCH_PEOPLE_ERROR,
  FETCH_PEOPLE_SUCCESS,
  FETCH_SCIENCE_ERROR,
  FETCH_SCIENCE_SUCCESS,
} from '../../../redux-store/fetchOtherCategory/fetchOtherCategoryConst'
import { CHANGE_CATEGORY } from '../../../redux-store/selectedCategory/selectedCategoryConst'
import { SIDEHEIGHT } from '../../../redux-store/sideHeight/sideHeightConst'
import './infoBlock.scss'
import InfoRenderer from './infoRenderer/InfoRenderer'

function InfoBlock() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to change selected category
  const changeCategory = (param) => {
    dispatch({ type: CHANGE_CATEGORY, payload: `${param}` })
  }

  //-------------------------------------------------------------

  // state which we get from redux store ando this value contain all states in redux store
  const state = useSelector((state) => state)
  // variable used for move side block with info
  const sideHeight = state.sideHeight.class
  // current language
  const language = state.changeLanguage.lang
  // variable used for displying categories
  const categoriesArr = state.categoriesInfoBlock[language]
  const corelateCategories = state.categoriesInfoBlock.corelate
  const selectedCategory = state.selectedCategory.category
  const selectedOblast = state.selectedOblast.selectedOblast
  const aboutOblast = state.aboutOblast.aboutOblast
  const domain = state.startSettings.domain
  const categoryLocale = state.categoryLocale

  // variable which contain selected category
  const [currentCategory, setcurrentCategory] = useState('history')
  // variable which contains reference on the parent of categories
  const parentCategories = useRef(null)
  // constant subclass name of active category
  const activeWord = 'active_iwce'

  // ---------------------------------------------------------------

  // check is selected category present in list with corelated guId
  const getCategoryId = (param) => {
    let buf
    categoryLocale.data.forEach((el) => {
      if (el.name.toLowerCase() === param) buf = el.id
    })
    return buf
  }

  // function which add active subclass to selected category and remove active subclass from previous category
  const clickOnCategory = (e) => {
    if (parentCategories.current != null) {
      const childrenClasses = parentCategories.current.children
      for (let i = 0; i < childrenClasses.length; i++) {
        childrenClasses[i].className = childrenClasses[i].className.replace(
          ` ${activeWord}`,
          '',
        )
      }
    }

    e.target.className = `${e.target.className} ${activeWord}`
    const temp_category_name = corelateCategories(e.target.innerText, language)

    setcurrentCategory(temp_category_name)

    changeCategory(temp_category_name)
  }

  // --------------------------------------------------------------------
  ////////////////////////////////////////////////////////////////////////////////////////
  // fetching data for side pannel
  useEffect(() => {
    if (selectedOblast && sideHeight === SIDEHEIGHT) {
      setTimeout(() => {
        const loc_lang = `${state.culture.data[language]['id']}`
        const loc_oblast = `${aboutOblast[selectedOblast]["0"]}`

        const urlHistory = `${domain}/api/${loc_lang}/History/${loc_oblast}`
        // ​/api​/{cultureId}​/ArticlesTile​/{regionName}​/{categoryId}

        const urlPeople = `${domain}/api/${
          loc_lang
        }/ArticlesTile/${
          loc_oblast
        }/${getCategoryId('people')}`
        // console.log(urlPeople)

        const urlDishes = `${domain}/api/${
          loc_lang
        }/ArticlesTile/${
          loc_oblast
        }/${getCategoryId('dishes')}`
        // console.log(urlDishes)

        const urlMusic = `${domain}/api/${
          loc_lang
        }/ArticlesTile/${
          loc_oblast
        }/${getCategoryId('music')}`
        // console.log(urlMusic)
        
        const urlScience = `${domain}/api/${
          loc_lang
        }/ArticlesTile/${
          loc_oblast
        }/${getCategoryId('science')}`
        // console.log(urlScience)

        let isCanseled = false
        const cancelToken = axios.CancelToken.source()

        axios
          .get(urlHistory, { cancelToken: cancelToken.token })
          .then((responce) => {
            if (!isCanseled) {
              dispatch({ type: FETCH_HISTORY_SUCCESS, payload: responce.data })
            }
          })
          .catch(() => {
            dispatch({ type: FETCH_HISTORY_ERROR })
          })

        axios
          .get(urlPeople)
          .then((responce) => {
            dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: responce.data })
          })
          .catch((e) => {
            dispatch({ type: FETCH_PEOPLE_ERROR, error: e })
          })

        axios
          .get(urlDishes)
          .then((responce) => {
            dispatch({ type: FETCH_DISHES_SUCCESS, payload: responce.data })
          })
          .catch((e) => {
            dispatch({ type: FETCH_DISHES_ERROR, error: e })
          })

        axios
          .get(urlMusic)
          .then((responce) => {
            dispatch({ type: FETCH_MUSIC_SUCCESS, payload: responce.data })
          })
          .catch((e) => {
            dispatch({ type: FETCH_MUSIC_ERROR, error: e })
          })

        axios
          .get(urlScience)
          .then((responce) => {
            dispatch({ type: FETCH_SCIENCE_SUCCESS, payload: responce.data })
          })
          .catch((e) => {
            dispatch({ type: FETCH_SCIENCE_ERROR, error: e })
          })

        return () => {
          isCanseled = true
          cancelToken.cancel()
        }
      }, 1000)
    }
  }, [selectedOblast, selectedCategory])
  ////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (parentCategories.current != null) {
      // set first variant in categories active
      parentCategories.current.children[0].className = `${parentCategories.current.children[0].className} ${activeWord}`
    }
  }, [sideHeight])

  // component to render view of selected information
  const SelectInfoCategory = () => {
    // variable which we pass to InfoRenderer component
    const [selected, setSelected] = useState(currentCategory)

    useEffect(() => {
      if (parentCategories.current != null) {
        const childrenClasses = parentCategories.current.children

        for (let i = 0; i < childrenClasses.length; i++) {
          if (childrenClasses[i].className.includes(activeWord)) {
            // setSelected(
            //   corelateCategories(childrenClasses[i].innerText, language),
            // )
            setSelected(
              childrenClasses[i].innerText
            )
          }
        }
      }
    }, [])

    return <InfoRenderer selectedCategory={selected} />
  }

  return (
    <>
      {sideHeight === SIDEHEIGHT ? (
        <div className={`infoBlock infoBlock_${sideHeight}`}>
          <div className="infoBlock_wrapper">
            <div className="infoBlock_wrapper_categories">
              <div
                className="infoBlock_wrapper_categories_scrollWrapper"
                ref={parentCategories}
              >
                {categoriesArr.map((el, index) => {
                  if (index != 0) {
                    return (
                      <div
                        onClick={clickOnCategory}
                        className="infoBlock_wrapper_categories_el"
                        key={`categoty_info_${index}`}
                      >
                        {el}
                      </div>
                    )
                  }
                })}
              </div>
            </div>

            <div className="infoBlock_wrapper_main">
              <div className="infoBlock_wrapper_main_view">
                <SelectInfoCategory />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default React.memo(InfoBlock)
