import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import '../popupSubs/popupSubs.scss'
import Subscription from '../Subscription'

function PopupSubs({setIsVisible}) {
//   const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div className="PopupSubs_Section">
          <div className="PopupSubs_Section_content">
            <Subscription popup={true} setIsVisible={setIsVisible}/>
            <div
              onClick={() => setIsVisible((el) => !el)}
              className="PopupSubs_Section_content_close"
            >
              <IonIcon className='popup_icon' icon={closeOutline} />
            </div>
          </div>
        </div>
    </>
  )
}

export default PopupSubs