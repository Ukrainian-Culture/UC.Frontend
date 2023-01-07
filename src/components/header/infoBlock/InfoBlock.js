import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const selectorState = useSelector((state) => state)
  // variable used for move side block with info
  const sideHeight = selectorState.sideHeight.class
  // current language
  const language = selectorState.changeLanguage.lang
  // variable used for displying categories
  const categoriesArr = selectorState.categoriesInfoBlock[language]
  const corelateCategories = selectorState.categoriesInfoBlock.corelate

  // variable which contain selected category
  const [currentCategory, setcurrentCategory] = useState(categoriesArr[0])
  // variable which contains reference on the parent of categories
  const parentCategories = useRef(null)
  // constant subclass name of active category
  const activeWord = 'active_iwce'
  // ---------------------------------------------------------------

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

    console.log(
      'currentCategory',
      corelateCategories(e.target.innerText, language),
    )

    changeCategory(temp_category_name)
  }

  useEffect(() => {
    if (parentCategories.current != null) {
      // set first variant in categories active
      parentCategories.current.children[0].className = `${parentCategories.current.children[0].className} ${activeWord}`
    }
  }, [sideHeight])

  // component to render view of selected information
  function SelectInfoCategory() {
    // variable which we pass to InfoRenderer component
    const [selected, setSelected] = useState(currentCategory)

    useEffect(() => {
      if (parentCategories.current != null) {
        const childrenClasses = parentCategories.current.children

        for (let i = 0; i < childrenClasses.length; i++) {
          if (childrenClasses[i].className.includes(activeWord)) {
            console.log('gacha', childrenClasses[i].innerText)
            // setSelected(childrenClasses[i].innerText)
            setSelected(
              corelateCategories(childrenClasses[i].innerText, language),
            )
          }
        }
      }
    })

    return <InfoRenderer selectedCategory={selected} />
  }

  return (
    <>
      {sideHeight === SIDEHEIGHT ? (
        <div className={`infoBlock infoBlock_${sideHeight}`}>
          <div className="infoBlock_wrapper">
            <div
              className="infoBlock_wrapper_categories"
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

export default InfoBlock
