import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import { useDispatch, useSelector } from 'react-redux'
import {
  CHANGE_SIDEHEIGHT,
  NO_SIDEHEIGHT,
  SIDEHEIGHT,
} from '../../redux-store/sideHeight/sideHeightConst'
import stopScroll from "../../hooks/scrolHandler"
import { CHANGE_OBLAST } from '../../redux-store/selectedOblast/selectedOblastConst'
import { useLocation } from 'react-router-dom'
import { ADAPTIVE_M_1 } from '../../settings/screenSizes'

const path = '/uk_map/UC.glb'

export function UC(props) {
  const { nodes, materials } = useGLTF(path)
  const { camReset, setcamReset } = props

  //-------------------------------------------------------------
  const location = useLocation()
  // hook used for sending action to reducer
  const dispatch = useDispatch()
  // function which send action to change sideHeight variable
  const changeSideHeight = (param) => {
    dispatch({ type: CHANGE_SIDEHEIGHT, payload: `${param}` })
  }
  // function which send action to change selectedOblast variable
  const changeOblast = (param) => {
    dispatch({ type: CHANGE_OBLAST, payload: `${param}` })
  }

  const state = useSelector((state) => state)
  // width of screen
  const screenWidth = state.screenWidth.width
  //-------------------------------------------------------------

  // variable contain last clickable oblast
  const [cState, setcState] = useState('')
  // pressed right now
  const [cNow, setcNow] = useState('')

  // basic color of oblast
  const [baseColor, setbaseColor] = useState('#e6fcff')
  const [arrBaseColor, setarrBaseColor] = useState([
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
    { color: baseColor },
  ])
  // color when oblast is selected
  const [selectColor, setselectColor] = useState('#2e333b')
  const [arrSelectColor, setarrSelectColor] = useState([
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
    { color: selectColor },
  ])

  const oblColor = [
    useSpring({ color: cNow == '1_lviv' ? selectColor : baseColor }),
    useSpring({ color: cNow == '2_volun' ? selectColor : baseColor }),
    useSpring({ color: cNow == '3_rivne' ? selectColor : baseColor }),
    useSpring({ color: cNow == '4_ternopil' ? selectColor : baseColor }),
    useSpring({ color: cNow == '5_ivano-frankivsk' ? selectColor : baseColor }),
    useSpring({ color: cNow == '6_zakarpattya' ? selectColor : baseColor }),
    useSpring({ color: cNow == '7_chernivtsi' ? selectColor : baseColor }),
    useSpring({ color: cNow == '8_hmelnytsk' ? selectColor : baseColor }),
    useSpring({ color: cNow == '9_jytomyr' ? selectColor : baseColor }),
    useSpring({ color: cNow == '10_kyiv' ? selectColor : baseColor }),
    useSpring({ color: cNow == '11_vinnytsa' ? selectColor : baseColor }),
    useSpring({ color: cNow == '12_odessa' ? selectColor : baseColor }),
    useSpring({ color: cNow == '13_mikolaiv' ? selectColor : baseColor }),
    useSpring({ color: cNow == '14_kirovograd' ? selectColor : baseColor }),
    useSpring({ color: cNow == '15_cherkasy' ? selectColor : baseColor }),
    useSpring({ color: cNow == '16_chernigiv' ? selectColor : baseColor }),
    useSpring({ color: cNow == '17_poltava' ? selectColor : baseColor }),
    useSpring({ color: cNow == '18_dnipro' ? selectColor : baseColor }),
    useSpring({ color: cNow == '19_herson' ? selectColor : baseColor }),
    useSpring({ color: cNow == '20_krym' ? selectColor : baseColor }),
    useSpring({ color: cNow == '21_zaporizzya' ? selectColor : baseColor }),
    useSpring({ color: cNow == '22_sumy' ? selectColor : baseColor }),
    useSpring({ color: cNow == '23_harkiv' ? selectColor : baseColor }),
    useSpring({ color: cNow == '24_donetsk' ? selectColor : baseColor }),
    useSpring({ color: cNow == '25_lugansk' ? selectColor : baseColor }),
  ]

  // position of map for default screen
  // var fromPlaceZ = -0.35;
  const [fromPlaceZ, setFromPlaceZ] = useState(20)
  // position to which the oblast should move
  const [toPlace, setToPlace] = useState([-0.65, 0.5, 1.66]);
  // array with animation of mooving from original position to particular point <toPlace>
  const oblMove = [
    useSpring({
      pos: cState == '1_lviv' ? toPlace : [-1.79, 0.84, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '2_volun' ? toPlace : [-1.58, 1.38, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '3_rivne' ? toPlace : [-1.28, 1.34, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '4_ternopil' ? toPlace : [-1.4, 0.83, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '5_ivano-frankivsk' ? toPlace : [-1.67, 0.52, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '6_zakarpattya' ? toPlace : [-2, 0.44, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '7_chernivtsi' ? toPlace : [-1.27, 0.41, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '8_hmelnytsk' ? toPlace : [-1.09, 0.83, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '9_jytomyr' ? toPlace : [-0.74, 1.18, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '10_kyiv' ? toPlace : [-0.26, 1.07, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '11_vinnytsa' ? toPlace : [-0.67, 0.56, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '12_odessa' ? toPlace : [-0.46, -0.1, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '13_mikolaiv' ? toPlace : [0.13, 0.1, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '14_kirovograd' ? toPlace : [0.17, 0.51, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '15_cherkasy' ? toPlace : [-0.02, 0.75, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '16_chernigiv' ? toPlace : [0.17, 1.46, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '17_poltava' ? toPlace : [0.55, 0.86, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '18_dnipro' ? toPlace : [0.83, 0.4, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '19_herson' ? toPlace : [0.5, -0.11, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '20_krym' ? toPlace : [0.75, -0.56, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '21_zaporizzya' ? toPlace : [1.09, 0.04, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '22_sumy' ? toPlace : [0.71, 1.36, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '23_harkiv' ? toPlace : [1.2, 0.85, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '24_donetsk' ? toPlace : [1.51, 0.33, fromPlaceZ],
    }),
    useSpring({
      pos: cState == '25_lugansk' ? toPlace : [1.88, 0.66, fromPlaceZ],
    }),
  ]

  // this function return number of oblast in array
  function getNumberOfSelectedOblast(p_oblast) {
    let temp = p_oblast.slice(0, p_oblast.indexOf('_'))

    return parseInt(temp) - 1
  }

  useEffect(()=>{
    if(screenWidth >= 1536) {
      setFromPlaceZ(-0.35)
      setToPlace([-0.65, 0.5, 1.66])
    }
    else if(screenWidth >= 1200) {
      setToPlace([-0.6, 0.5, 1.4])
      setFromPlaceZ(-0.65)
    }
    else if(screenWidth >= 1000) {
      setToPlace([-0.55, 0.5, 1.2])
      setFromPlaceZ(-1.35)
    }
    else if(screenWidth >= 821) {
      setFromPlaceZ(-2) 
      setToPlace([-0.53, 0.5, 0.8])
    }

    else if(screenWidth >= 781) {
      setFromPlaceZ(-4.35)
      setToPlace([-0.55, 0.5, 0.1])
    }
    else if(screenWidth >= 615) {
      setFromPlaceZ(-4.35)
      setToPlace([0, -0.55, -0.5])
    }
    else if(screenWidth >= 480) {
      setFromPlaceZ(-4.35)
      setToPlace([0, -0.55, -0.5])
    }
    else if(screenWidth >= 370) {
      setFromPlaceZ(-8.35)
      setToPlace([0, -0.55, -0.5])
    }
    else if(screenWidth >= 320) {
      setFromPlaceZ(-9.35)
      setToPlace([0, -0.55, -0.5])
    }
    else if(screenWidth >= 280) {
      setFromPlaceZ(-10.35)
      setToPlace([0, -0.55, -0.5])
    }
    else if(screenWidth >= 150) {
      setFromPlaceZ(-15.35)
      setToPlace([0, -0.55, -0.5])
    }
    else{
      
    }

  },[screenWidth])

  return (
    <a.group
      {...props}
      dispose={null}
      onPointerDown={async (e) => {
        e.stopPropagation()

        // getting material name of oblast which were clicked
        const materialName = e.object.material.name
        // console.log(materialName)

        // initializing oblast which should be animated
        setcNow(materialName)
        if (materialName === cState) {
          // if selected same oblast move this oblast to original position
          setcState(null)
          setcNow(null)

          changeSideHeight(NO_SIDEHEIGHT)
          // resume scroll when selected some region
          stopScroll("scroll")

          changeOblast('')
        } else {
          // if selected oblast

          setcState(materialName)

          changeSideHeight(SIDEHEIGHT)
          // stop scroll when selected some region
          stopScroll("hidden")

          changeOblast(getNumberOfSelectedOblast(materialName))
        }

        // starting camera to reset
        camReset ? setcamReset(false) : setcamReset(true)
      }}
    >
      <a.mesh
        geometry={nodes['1_lviv'].geometry}
        material={materials['1_lviv']}
        material-color={oblColor[0].color}
        position={oblMove[0].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['2_volun'].geometry}
        material={materials['2_volun']}
        material-color={oblColor[1].color}
        position={oblMove[1].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['3_rivne'].geometry}
        material={materials['3_rivne']}
        material-color={oblColor[2].color}
        position={oblMove[2].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['4_ternopil'].geometry}
        material={materials['4_ternopil']}
        material-color={oblColor[3].color}
        position={oblMove[3].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['5_ivano-frankivsk'].geometry}
        material={materials['5_ivano-frankivsk']}
        material-color={oblColor[4].color}
        position={oblMove[4].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['6_zakarpattya'].geometry}
        material={materials['6_zakarpattya']}
        material-color={oblColor[5].color}
        position={oblMove[5].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['7_chernivtsi'].geometry}
        material={materials['7_chernivtsi']}
        material-color={oblColor[6].color}
        position={oblMove[6].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['8_hmelnytsk'].geometry}
        material={materials['8_hmelnytsk']}
        material-color={oblColor[7].color}
        position={oblMove[7].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['9_jytomyr'].geometry}
        material={materials['9_jytomyr']}
        material-color={oblColor[8].color}
        position={oblMove[8].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['10_kyiv'].geometry}
        material={materials['10_kyiv']}
        material-color={oblColor[9].color}
        position={oblMove[9].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['11_vinnytsa'].geometry}
        material={materials['11_vinnytsa']}
        material-color={oblColor[10].color}
        position={oblMove[10].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['12_odessa'].geometry}
        material={materials['12_odessa']}
        material-color={oblColor[11].color}
        position={oblMove[11].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['13_mikolaiv'].geometry}
        material={materials['13_mikolaiv']}
        material-color={oblColor[12].color}
        position={oblMove[12].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['14_kirovograd'].geometry}
        material={materials['14_kirovograd']}
        material-color={oblColor[13].color}
        position={oblMove[13].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['15_cherkasy'].geometry}
        material={materials['15_cherkasy']}
        material-color={oblColor[14].color}
        position={oblMove[14].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['16_chernigiv'].geometry}
        material={materials['16_chernigiv']}
        material-color={oblColor[15].color}
        position={oblMove[15].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['17_poltava'].geometry}
        material={materials['17_poltava']}
        material-color={oblColor[16].color}
        position={oblMove[16].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['18_dnipro'].geometry}
        material={materials['18_dnipro']}
        material-color={oblColor[17].color}
        position={oblMove[17].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['19_herson'].geometry}
        material={materials['19_herson']}
        material-color={oblColor[18].color}
        position={oblMove[18].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['20_krym'].geometry}
        material={materials['20_krym']}
        material-color={oblColor[19].color}
        position={oblMove[19].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['21_zaporizzya'].geometry}
        material={materials['21_zaporizzya']}
        material-color={oblColor[20].color}
        position={oblMove[20].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['22_sumy'].geometry}
        material={materials['22_sumy']}
        material-color={oblColor[21].color}
        position={oblMove[21].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['23_harkiv'].geometry}
        material={materials['23_harkiv']}
        material-color={oblColor[22].color}
        position={oblMove[22].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['24_donetsk'].geometry}
        material={materials['24_donetsk']}
        material-color={oblColor[23].color}
        position={oblMove[23].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
      <a.mesh
        geometry={nodes['25_lugansk'].geometry}
        material={materials['25_lugansk']}
        material-color={oblColor[24].color}
        position={oblMove[24].pos}
        rotation={[Math.PI / 2, 0, 0]}
      ></a.mesh>
    </a.group>
  )
}

useGLTF.preload(path)
