import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../notFoundPage/notFoundPage.scss"

function NotFoundPage() {
  const navigation = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigation("/", {replace:true})
    }, 1000)
  },[])
  return (
    <div className='notFoundPage'>
      <h1>nothing here 👨‍🔧💻🔥</h1>
    </div>
  )
}

export default NotFoundPage
