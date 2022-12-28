import React from 'react'
import { useSelector } from 'react-redux';
import '../card/card.scss'
import {Link} from "react-router-dom" 

function Card(props) {
  const { title, subText, category } = props
  const emojiCategory = useSelector(state => state.emojiCategory.emoji)
    
  // function that make text shorter to accomodate
  function croppedText(p_text){
    const maxLength = 48;

    if(p_text.length > maxLength){
        return `${p_text.slice(0, maxLength)}...`
    }
    return p_text
  }
  return (
    <>
      <Link className="cardBlock" to={`/article/${title}`}>
        <div className="cardBlock_title">{title}</div>

        <div className="cardBlock_bottomWrapper">
          <div className="cardBlock_bottomWrapper_subText">{croppedText(subText)}</div>
          <div className="cardBlock_bottomWrapper_categoryEmoji">{emojiCategory[category]}</div>
        </div>
      </Link>
    </>
  )
}

export default Card
