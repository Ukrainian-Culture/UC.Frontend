import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../card/card.scss'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { SEARCH_CHANGE } from '../../redux-store/search/searchConst'

function Card(props) {
  const dispatch = useDispatch()
  
  const changeSearchText = (val) => {
    dispatch({ type: SEARCH_CHANGE, payload: val })
  }

  const state = useSelector((state) => state)

  // -------------------------------------------
  const {articleId ,title, subText, category, region } = props.el
  const emojiCategory = useSelector((state) => state.emojiCategory.emoji)

  const tl = useRef()
  const tl_hover = useRef()
  const cardWrap = useRef()
  // =======================================================

  // function that make text shorter to accomodate
  function croppedText(p_text, num) {
    const maxLength = num

    if (p_text.length > maxLength) {
      return `${p_text.slice(0, maxLength)}`
    }
    return p_text
  }
  // -----------------------------------------------

  const animEnterHover = (e) => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to('.cardBlock_hint', { opacity: 1, delay: 0.5, duration: 0.4 })
    }, e.target)

    return () => ctx.revert()
  }
  const animLeaveHover = (e) => {
    const ctx = gsap.context(() => {
      tl.current.reverse()
    }, e.target)

    return () => ctx.revert()
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      // tl.current = gsap.timeline().to()
    }, cardWrap)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Link
      onClick={()=>changeSearchText('')} className="cardBlock" to={`/article/${articleId}`} ref={cardWrap} state={{shortDesc: subText, el: props.el}}>
        <div className="cardBlock_title">{title}</div>

        <div className="cardBlock_bottomWrapper">
          <div className="cardBlock_bottomWrapper_subText">
            {croppedText(subText, 110)}
          </div>

          <div
            className="cardBlock_bottomWrapper_categoryEmoji"
            onMouseEnter={(e) => animEnterHover(e)}
            onMouseLeave={(e) => animLeaveHover(e)}
          >
            {/* <div className="cardBlock_hint_wrapp">
              <div className='cardBlock_hint'> 
              {category}
              </div>
            </div> */}
            {emojiCategory[category.toLowerCase()]}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
