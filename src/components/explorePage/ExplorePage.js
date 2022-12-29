import React, { useEffect } from 'react'
import '../explorePage/explorePage.scss'
import { useDispatch } from 'react-redux'
import {
  NO_SIDEHEIGHT,
  CHANGE_SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'

function ExplorePage() {
  //-------------------------------------------------------------
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to close side height
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }
  //-------------------------------------------------------------

  useEffect(() => {
    changeSideHeight(NO_SIDEHEIGHT)
  }, [])

  return (
    <div className='explorePage'>
      <h1>EXPLORE PAGE</h1>
    </div>
  )
}

export default ExplorePage
