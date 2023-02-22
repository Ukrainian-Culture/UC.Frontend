import React from 'react'
import { useSelector } from 'react-redux'
import './footer.scss'

import { ReactComponent as LOGO } from '../../logo.svg'

const Footer = () => {
  const state = useSelector((state) => state)

  // current language
  const language = state.changeLanguage.lang
  //variable for text in  interface in different language
  const interfaceLang = state.interfaceLang[language]

  return (
    <div className="footer">
      <div className="footerWrap">
        <div className="footerDefaultBlock">
          <div className="footerText">
            <LOGO className="footerText_logo_svg" />
          </div>
          <div className="footerText">{interfaceLang.d_a_d}</div>
        </div>
        <div className="footerDefaultBlock">
          <div className="footerText">ucsupport@gmail.com</div>
          <div className="footerText">{interfaceLang.l_c_u}</div>
        </div>
        <div className="footerDefaultBlock">
            <div className="footerText">{interfaceLang.about_us}</div>
          <div className="footerText">{interfaceLang.private_policy}</div>
          <div className="footerText">{interfaceLang.t_a_c}</div>
        </div>
        <div className="footerFormWrap">
          <div className="footerFormText">
            <div className="footerFormTitle">{interfaceLang.g_2_off}</div>
            <div className="footerFormSubtitle">{interfaceLang.b_s_t_n}</div>
          </div>
          <form className="footerForm">
            <input
              type="text"
              className="footerInput"
              placeholder={interfaceLang.your_email}
            />
            <button className="footerButton">📬</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
