import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import '../header/header.scss'

function Header() {
    // variable used for move side block with info
    const sideHeight = useSelector(state=>state.sideHeight.class)
    const selectedOblast = useSelector(state=>state.selectedOblast.selectedOblast)
    /*useEffect(()=> {

        console.log(selectedOblast)
    }, [selectedOblast])*/

  return (
    <div className={`headerSection ${sideHeight}`}>
       <div className={'mainHeader'}>
           <div className={"headerLeft"}>
               <div>logo</div>
               <div>Map</div>
               <div>Explore</div>
           </div>
           <div>{selectedOblast}</div>
           <div className={"headerRight"}>
               <div>en</div>
               <div>theme</div>
               <div>user</div>
           </div>
       </div>
    </div>
  )
}

export default Header
