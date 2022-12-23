import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../header/header.scss'

function Header() {
    // variable used for move side block with info
    const sideHeight = useSelector(state=>state.sideHeight.class)
    
  return (
    <div className={`headerSection ${sideHeight}`}>
    </div>
  )
}

export default Header
