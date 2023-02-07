import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import StartAppRequests from '../../hooks/StartAppRequests'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import Header from '../header/Header'
import LoadingPage from '../loadingPage/LoadingPage'
import MainPage from '../mainPage/MainPage'
import '../profile/profile.scss'
import AdminArticles from './adminArticles/AdminArticles'

function Profile() {
  // const [currentPage, setCurrentPage] = usestate()
  const state = useSelector((state) => state)
  // current language
  const language = state.changeLanguage.lang
  const profileCategory = state.profileCategory
  const interfaceLang = state.interfaceLang[language]
  // ===============================================
  // variable needed for geting width of screen
  const profileWrap = useRef()
  //contain index of current category in profile page
  const [currentCateg, setCurrentCateg] = useState(0)
  const activeWord = 'active'
  // reference of parent obkect of cztegories
  const categoryParent = useRef()

  //------------------------------------------------

  // function which calls when category button pressed
  const categorySelector = (e) => {
    if (categoryParent.current != null) {
      
      const childrenClasses = categoryParent.current.children
      for (let i = 0; i < childrenClasses.length; i++) {
        if (childrenClasses[i].innerText === e.target.innerText) {
          e.target.className = `${e.target.className.replace(
            ` ${activeWord}`,
            '',
          )} ${activeWord}`

          setCurrentCateg(i)
        } else {
          childrenClasses[i].className = childrenClasses[i].className
            .replaceAll(`${activeWord}`, '')
            .replaceAll(' ', '')
        }
      }
    }
  }

  //------------------------------------------------

  useEffect(() => {
    if (categoryParent.current != null) {
      // set first variant in categories active
      categoryParent.current.children[0].className = `${categoryParent.current.children[0].className} ${activeWord}`
    }
  }, [])

  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })

  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      <div className="ProfileSection" ref={profileWrap}>
        <div className="ProfileSection_header">
          <Header basic={true} />
        </div>

        <div className="ProfileSection_mainBody">
          <div className="ProfileSection_mainBody_wrapper">
            <div className="ProfileSection_mainBody_wrapper_head">
              <div
                className="ProfileSection_mainBody_wrapper_head_left"
                ref={categoryParent}
              >
                {profileCategory.category[language].map((el, index) => {
                  return (
                    <div
                      className="ProfileSection_mainBody_wrapper_head_left_el"
                      key={`PSMBWHL_${index}`}
                      onMouseDown={(e) => categorySelector(e)}
                    >
                      {el}
                    </div>
                  )
                })}

                <div
                  className="ProfileSection_mainBody_wrapper_head_left_el"
                  onMouseDown={(e) => categorySelector(e)}
                >
                  {profileCategory.adminCategory[language]}
                </div>
              </div>

              <div className="ProfileSection_mainBody_wrapper_head_right">
                {interfaceLang.logout}
              </div>
            </div>

            <div className="ProfileSection_mainBody_wrapper_content">
              <AdminArticles/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
