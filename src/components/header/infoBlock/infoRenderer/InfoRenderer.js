import React from 'react'
import { useSelector } from 'react-redux'
import '../infoRenderer/infoRenderer.scss'
import HistoryRenderer from './historyRenderer/HistoryRenderer'
import OtherRenderer from './otherRenderer/OtherRenderer'

function InfoRenderer(props) {
  const { selectedCategory } = props

  // const selectedCategory_test = useSelector(state=>state.selectedCategory.category)

  return (
    <div className="infoRenderer">
      {/* {`selectedCategory: ${selectedCategory} ${selectedCategory_test}`} */}
      {selectedCategory == 'history' ? (
        <HistoryRenderer />
      ) : (
        <div className='infoRenderer_wrapper'>
          <OtherRenderer />
        </div>
      )}

    </div>
  )
}

export default InfoRenderer
