import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'
import Card from '../../../../card/Card'
import '../otherRenderer/otherRenderer.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import LoadingEmoji from '../../../../loadingPage/loadingEmoji/LoadingEmoji'
import LoadingPlates from '../../../../loadingPage/loadingPlates/LoadingPlates'

function OtherRenderer() {
  const state = useSelector((state) => state)
  const fetchPeople = state.fetchPeople
  const fetchDishes = state.fetchDishes
  const fetchMusic = state.fetchMusic
  const fetchScience = state.fetchScience
  const selectedCategory = state.selectedCategory.category
  const aboutOblast = state.aboutOblast.aboutOblast
  const selectedOblast = state.selectedOblast.selectedOblast
  // -----------------------------------------
  // const [platesArr, setPlatesArr] = useState([])
  const [currentPlates, setCurrentPlates] = useState('')
  const otherWrapper = useRef()
  const tl = useRef()

  // component to render plates
  const PlatesRender = () => {
    return (
      <>
        {currentPlates.data.length !== 0 ? (
          currentPlates.data.map((el, index) => {
            return <Card key={`CPDLEPDM_${index}`} el={el} />
          })
        ) : (
          <div className="emptyTextBruh">empty</div>
        )}
      </>
    )
  }

  // ----------------------------------------
  useEffect(() => {
    switch (selectedCategory) {
      case 'people':
        setCurrentPlates(fetchPeople)
        break
      case 'dishes':
        setCurrentPlates(fetchDishes)
        break
      case 'music':
        setCurrentPlates(fetchMusic)
        break
      case 'science':
        setCurrentPlates(fetchScience)
        break
    }
  }, [selectedCategory])

  useEffect(() => {
    // animation with gsap
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap.timeline().from('.cardBlock', {
        y: -10,
        opacity: 0.6,
        stagger: 0.04,
      })
    }, otherWrapper)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {!currentPlates.loading &&
      currentPlates.error === '' &&
      currentPlates.data.length !== 0 &&
      currentPlates.data[0].region.toLowerCase() ===
        aboutOblast[selectedOblast]['0'].toLowerCase() ? (
        <div className="otherRenderer" ref={otherWrapper}>
          <PlatesRender />
        </div>
      ) : (
        // <LoadingPlates other={true} />
        <LoadingEmoji />
      )}
    </>
  )
}

export default OtherRenderer
