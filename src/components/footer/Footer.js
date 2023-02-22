import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './footer.scss'

import PopupBlock from '../popupBlock/PopupBlock'
import { ReactComponent as LOGO } from '../../logo.svg'

const Footer = () => {
  const state = useSelector((state) => state)

  // current language
  const language = state.changeLanguage.lang
  //variable for text in  interface in different language
  const interfaceLang = state.interfaceLang[language]
  // ====================================================
  const [isPolicy, setIsPolicy] = useState(false)
  const [isTerms, setIsTerms] = useState(false)

  const content = {
    policy: {
      title: ['hellodfg', 'привіт'],
      content: [
        'hellodlfgj dfgjldfgj dflg ldfgj dfjg ldfgl dfkogldf kdfk ldfg l;dfkg o;dfkgdfgk dfog',
        'привіт',
      ],
    },
    terms: { title: ['hello', 'привіт'], content: ['hello', 'привіт'] },
  }
  // ====================================================

  const PopupFootRender = ({ data }) => {
    return (
      <div className="popupFootRender">
        <h1 className="popupFootRender_title">{data.title[language]}</h1>
        <p className="popupFootRender_content">{data.content[language]}</p>
      </div>
    )
  }

  return (
    <>
      {isPolicy ? (
        <div className="privacy_policy popupFoot">
          <PopupBlock closeBtn={true} setIsVisible={setIsPolicy}>
            <PopupFootRender data={content.policy} />
          </PopupBlock>
        </div>
      ) : null}

      {isTerms ? (
        <div className="terms_conditions popupFoot">
          <PopupBlock closeBtn={true} setIsVisible={setIsTerms}>
            <PopupFootRender data={content.terms} />
          </PopupBlock>
        </div>
      ) : null}

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
            <div
              onClick={() => setIsPolicy(true)}
              className="footerText footerTextPolicy"
            >
              {interfaceLang.private_policy}
            </div>
            <div
              onClick={() => setIsTerms(true)}
              className="footerText footerTextTerms"
            >
              {interfaceLang.t_a_c}
            </div>
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
    </>
  )
}

export default Footer
