import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import '../popupBlock/popupBlock.scss'

function PopupBlock({ closeBtn, setIsVisible, children, ...rest }) {
  const closeOnBackground = (e) => {
    if (e.target == e.currentTarget) setIsVisible((val) => !val)
  }
  return (
    <>
      <div onClick={closeOnBackground} className="PopupBlock_Section">
        <div className="PopupBlock_Section_Content">
          {closeBtn ? (
            <div
              onClick={() => setIsVisible(false)}
              className="PopupBlock_Section_Content_Close"
            >
              <IonIcon className="popup_icon" icon={closeOutline} />
            </div>
          ) : null}

          <div className="PopupBlock_Section_Content_Main">
            {React.cloneElement(children, { ...rest })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupBlock
