import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_HISTORY_ERROR,
  FETCH_HISTORY_SUCCESS,
} from '../../../../redux-store/fetchHistory/fetchHistoryConst'
import { SIDEHEIGHT } from '../../../../redux-store/sideHeight/sideHeightConst'
import '../infoRenderer/infoRenderer.scss'
import HistoryRenderer from './historyRenderer/HistoryRenderer'
import OtherRenderer from './otherRenderer/OtherRenderer'

function InfoRenderer(props) {
  const { selectedCategory } = props
  const state = useSelector(state => state)
  const categoriesInfoBlock = state.categoriesInfoBlock['1']

  if(selectedCategory == 'history'){
    return (
      <div className="infoRenderer">
         <HistoryRenderer />
      </div>
    )
  }
  else if(categoriesInfoBlock.includes(selectedCategory)){
    return(
      <div className="infoRenderer_wrapper">
          <OtherRenderer />
        </div>
    )
  }
else return(<></>)
  
  // return (
  //   <div className="infoRenderer">
  //     {selectedCategory == 'history' ? (
  //       <HistoryRenderer />
  //     ) : (
  //       <div className="infoRenderer_wrapper">
  //         <OtherRenderer />
  //       </div>
  //     )}
  //   </div>
  // )
}

export default React.memo(InfoRenderer)
