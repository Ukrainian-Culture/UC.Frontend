import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import StartAppRequests from '../../hooks/StartAppRequests'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import LoadingPage from '../loadingPage/LoadingPage'
import '../notFoundPage/notFoundPage.scss'

function NotFoundPage() {
  const navigation = useNavigate()
  const profileWrap = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })


  useEffect(() => {
    setTimeout(() => {
      navigation('/', { replace: true })
    }, 1000)
  }, [])

  return (
    <>
      <StartAppRequests />
      <LoadingPage main={true} />

      <div className="notFoundPage" ref={profileWrap}>
        <h1>nothing here 👨‍🔧💻🔥</h1>
      </div>
    </>
  )
}

export default NotFoundPage
