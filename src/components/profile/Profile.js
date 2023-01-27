import React from 'react'
import { useRef } from 'react'
import StartAppRequests from '../../hooks/StartAppRequests'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import Header from '../header/Header'
import LoadingPage from '../loadingPage/LoadingPage'
import MainPage from '../mainPage/MainPage'
import '../profile/profile.scss'

function Profile() {
  const profileWrap = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })
  return (
    <>
      <div className="ProfileSection" ref={profileWrap}>
        <div className="ProfileSection_header">
          <Header basic={true} />
        </div>

        <div className="ProfileSection_mainBody">
          <div>oh shit this is profile page</div>
        </div>
      </div>
    </>
  )
}

export default Profile
