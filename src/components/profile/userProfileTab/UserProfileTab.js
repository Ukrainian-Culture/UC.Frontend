import { IonIcon } from '@ionic/react'
import { enterOutline, createOutline, pencilOutline } from 'ionicons/icons'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import PopupBlock from '../../popupBlock/PopupBlock'
import PopupWindow from '../popupWindow/PopupWindow'
import '../userProfileTab/userProfileTab.scss'
import Changer from "../../emain_passwordChanger/Changer";

function UserProfileTab() {
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const interfaceLang = state.interfaceLang
  const user = state.user
  const [isPopup, setIsPopup] = useState(false);
  const [popupContent,setPopupContent] = useState('');
  //=====================================

  return (
    <>

      {
        isPopup ?
            <div className="UserProfileChangerPopup">
              <PopupBlock setIsPopup={setIsPopup}  setIsVisible={setIsPopup}>
                <Changer content={popupContent}/>
              </PopupBlock>
            </div>
            :null
      }

      <div className="UserProfileTab_section">
        <div className="UserProfileTab_section_left UserProfileTab_section_el">
          <div className="UserProfileTab_section_left_inp">
            <div className="UserProfileTab_section_left_title">
              {interfaceLang[language].email}
            </div>

            <div onClick={() => {setIsPopup(true); setPopupContent('email')}} className="UserProfileTab_section_left_inputWrap">
              <div className="UserProfileTab_section_left_inputWrap_input">
                {user.data.email}
              </div>

              <IonIcon
                icon={pencilOutline}
                className="UserProfileTab_section_left_inputWrap_icon profileIcon"
              />
            </div>
          </div>

          <div  className="UserProfileTab_section_left_inp">
            <div className="UserProfileTab_section_left_title">
              {interfaceLang[language].password}
            </div>

            <div onClick={() => {setIsPopup(true); setPopupContent('password')}} className="UserProfileTab_section_left_inputWrap">
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
          <div className="UserProfileTab_section_right_title">
            {interfaceLang[language].subscription}
          </div>

          <div className="UserProfileTab_section_right_time">00:00:00</div>

          <div className="UserProfileTab_section_right_addButton">
            {interfaceLang[language].add_subscription}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfileTab
