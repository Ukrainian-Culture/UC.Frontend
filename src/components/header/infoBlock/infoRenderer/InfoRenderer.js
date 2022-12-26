import React from 'react'
import "../infoRenderer/infoRenderer.scss"
import HistoryRenderer from './historyRenderer/HistoryRenderer';
import OtherRenderer from './otherRenderer/OtherRenderer';

function InfoRenderer(props) {
  const {selectedCategory} = props;
  
  return (
    <div className='infoRenderer'>
      {
        selectedCategory == "history"
        ?
        <HistoryRenderer/>
        :
        <OtherRenderer/>
      }
    </div>
  )
}

export default InfoRenderer