import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StartAppRequests from '../../hooks/StartAppRequests'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import Header from '../header/Header'
import LoadingPage from '../loadingPage/LoadingPage'
import MainPage from '../mainPage/MainPage'
import '../profile/profile.scss'
import AdminArticles from './adminArticles/AdminArticles'
import ProfileRenderer from './profileRenderer/ProfileRenderer'
import NotFoundPage from '../notFoundPage/NotFoundPage'
import Registration from '../Registration/Registration'
import {
  FETCH_USER_SUCCESS,
  LS_USER,
} from '../../redux-store/fetchUser/fetchUserConst'

function Profile() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  // user data
  const user = state.user
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
  //////////////////////////////////////////////////////////////////////
  const cliclLogOut = () => {
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: {
        role: 'notuser',
        email: '',
        accessToken: '',
        refreshToken: '',
        startDate: [],
        endDate: [],
        daysAmount: 0,
      },
    })
    localStorage.removeItem(LS_USER)
  }
  //////////////////////////////////////////////////////////////////////

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
      {user.data.role !== 'notuser' ? (
        <>
          <StartAppRequests />
          <LoadingPage main={true} />

          <div className="ProfileSection" ref={profileWrap}>
            <div className="ProfileSection_header">
              <Header basic={true} />
            </div>

            {!user.loading ? (
              <div className="ProfileSection_mainBody">
                <div className="ProfileSection_mainBody_wrapper">
                  <div className="ProfileSection_mainBody_wrapper_head">
                    <div
                      className="ProfileSection_mainBody_wrapper_head_left"
                      ref={categoryParent}
                    >
                      {profileCategory[user.data.role][language].map(
                        (el, index) => {
                          return (
                            <div
                              className="ProfileSection_mainBody_wrapper_head_left_el"
                              key={`PSMBWHL_${index}`}
                              onMouseDown={(e) => categorySelector(e)}
                            >
                              {el}
                            </div>
                          )
                        },
                      )}
                    </div>

                    <div
                      onClick={cliclLogOut}
                      className="ProfileSection_mainBody_wrapper_head_right"
                    >
                      {interfaceLang.logout}
                    </div>
                  </div>

                  <div className="ProfileSection_mainBody_wrapper_content">
                    <ProfileRenderer
                      user={user}
                      profileCategory={profileCategory}
                      currentCateg={currentCateg}
                      language={language}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <Registration />
      )}
    </>
  )
}

export default Profile
