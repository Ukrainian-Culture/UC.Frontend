import { IonIcon } from '@ionic/react'
import { enterOutline, createOutline, pencilOutline } from 'ionicons/icons'
import React from 'react'
import PopupWindow from '../popupWindow/PopupWindow'
import '../userProfileTab/userProfileTab.scss'

function UserProfileTab() {

  return (
    <>
      <PopupWindow/>

      <div className="UserProfileTab_section">
        <div className="UserProfileTab_section_left UserProfileTab_section_el">
          <div className="UserProfileTab_section_left_inp">
            <div className="UserProfileTab_section_left_title">email</div>

            <div className="UserProfileTab_section_left_inputWrap">
              <div className="UserProfileTab_section_left_inputWrap_input">
                some email
              </div>

              <IonIcon
                icon={pencilOutline}
                className="UserProfileTab_section_left_inputWrap_icon profileIcon"
              />
            </div>
          </div>

          <div className="UserProfileTab_section_left_inp">
            <div className="UserProfileTab_section_left_title">password</div>

            <div className="UserProfileTab_section_left_inputWrap">
              <div className="UserProfileTab_section_left_inputWrap_input">
                ***************
              </div>

              <IonIcon
                icon={pencilOutline}
                className="UserProfileTab_section_left_inputWrap_icon profileIcon"
              />
            </div>
          </div>
        </div>

        <div className="UserProfileTab_section_right UserProfileTab_section_el">
          <div className="UserProfileTab_section_right_title">Subsription</div>

          <div className="UserProfileTab_section_right_time">00:00:00</div>

          <div className="UserProfileTab_section_right_addButton">
            add subscription
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfileTab
