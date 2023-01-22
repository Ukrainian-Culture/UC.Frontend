import React, { useEffect, useState, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { UC } from './UC'
import '../mapSection/mapSection.scss'
import { useSelector } from 'react-redux'
import { NO_SIDEHEIGHT, SIDEHEIGHT } from '../../redux-store/sideHeight/sideHeightConst'

function CustomCamControll(props) {
  const { camReset, setcamReset } = props
  const camRef = useRef() // reference to PerspectiveCamera component from drei
  const vec = new THREE.Vector3()

  // default position of camera
  const defPosX = 0
  const defPosY = 0.5
  const defPosZ = 3

  const [posX, setposX] = useState({ pos: 0, is: true })
  const [posY, setposY] = useState({ pos: 0, is: true })
  const [posZ, setposZ] = useState({ pos: 0, is: true })

  // move camera till start position
  function simpleReset() {
    const eps = 0.00001 // some value of precition till end of movint camera to start position
    var isEps = false

    if (
      Math.abs(camRef.current.position.x - posX.pos) < eps &&
      Math.abs(camRef.current.position.y - posY.pos) < eps &&
      Math.abs(camRef.current.position.z - posZ.pos) < eps
    ) {
      setcamReset(isEps)

      console.log('END OF RESET')
    }
  }

  useFrame((state) => {
    // if (!camRef.current) return

    // // x axies border of camera movings
    // if (state.camera.position.x > 1.5) state.camera.position.x -= 0.05
    // if (state.camera.position.x > 0.6) state.camera.position.x -= 0.01
    // if (state.camera.position.x < -1.5) state.camera.position.x += 0.05
    // if (state.camera.position.x < -0.6) state.camera.position.x += 0.01
    // // y axies border of camera movings
    // if (state.camera.position.y > 1.5) state.camera.position.y -= 0.05
    // if (state.camera.position.y > 0.6) state.camera.position.y -= 0.01
    // if (state.camera.position.y < -1.5) state.camera.position.y += 0.05
    // if (state.camera.position.y < -0.6) state.camera.position.y += 0.01
    // // z axies border of camera movings
    // if (state.camera.position.z < 0) state.camera.position.z += 0.07
    // if (state.camera.position.z < 2.5) state.camera.position.z += 0.01
    // if (state.camera.position.z > 3) state.camera.position.z -= 0.05

    // if (camReset) {
    //   state.camera.rotation.x = 0
    //   state.camera.rotation.y = 0
    //   state.camera.rotation.z = 0

    //   state.camera.position.lerp(vec.set(defPosX, defPosY, defPosZ), 0.1)

    //   // simpleReset()
    // } else {
    //   state.camera.rotation.x = 0
    //   state.camera.rotation.y = 0
    //   state.camera.rotation.z = 0
    // }

    state.camera.updateProjectionMatrix()
  })

  useEffect(() => {
    if (camRef.current) {
      setposX({ pos: camRef.current.position.x, is: true })
      setposY({ pos: camRef.current.position.y, is: true })
      setposZ({ pos: camRef.current.position.z, is: true })

      // console.log('start', camRef.current.rotation.z)
    }
  }, [])

  return (
    <PerspectiveCamera
      ref={camRef}
      makeDefault
      position={[defPosX, defPosY, defPosZ]}
    />
  )
}

function MapSection() {
  //-------------------------------------------------------------
  const sideHeight = useSelector((state) => state.sideHeight.class)
  //-------------------------------------------------------------
  const [camReset, setcamReset] = useState(false)

  return (
    <div className="mapSection">
      <Canvas>
        {/* component that handle position of camera */}
        <CustomCamControll camReset={camReset} setcamReset={setcamReset} />

        {/* light */}
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.8} />

        {/* component which controll view position */}
        {/* {sideHeight === NO_SIDEHEIGHT || sideHeight === ""  ? (
          <OrbitControls zoomSpeed={0.5} panSpeed={0.5} rotateSpeed={0.5} />
        ) : null} */}

        {/* map of ukraine */}
        <UC camReset={camReset} setcamReset={setcamReset} />
      </Canvas>
    </div>
  )
}

export default React.memo(MapSection)
