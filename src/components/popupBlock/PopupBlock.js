import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import '../popupBlock/popupBlock.scss'

function PopupBlock({ setIsVisible, children, ...rest }) {
  const closeOnBackground = (e) => {
    if (e.target == e.currentTarget) setIsVisible((val) => !val)
  }
  return (
    <>
      <div onClick={closeOnBackground} className="PopupBlock_Section">
        <div className="PopupBlock_Section_Content">
          <div className="PopupBlock_Section_Content_Main">
      
           {React.cloneElement(children, {...rest})}
          </div>
          {/* <div className="PopupBlock_Section_Content_Close">
        <IonIcon className="popup_icon" icon={closeOutline} />
      </div> */}
        </div>
      </div>
    </>
  )
}

export default PopupBlock
