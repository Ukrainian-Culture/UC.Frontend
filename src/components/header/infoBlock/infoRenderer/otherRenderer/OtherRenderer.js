import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'
import Card from '../../../../card/Card'
import '../otherRenderer/otherRenderer.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import LoadingEmoji from '../../../../loadingPage/loadingEmoji/LoadingEmoji'

function OtherRenderer() {
  const state = useSelector((state) => state)
  const fetchPeople = state.fetchPeople
  const fetchDishes = state.fetchDishes
  const fetchMusic = state.fetchMusic
  const fetchScience = state.fetchScience
  const selectedCategory = state.selectedCategory.category
  // -----------------------------------------
  // const [platesArr, setPlatesArr] = useState([])
  const [currentPlates, setCurrentPlates] = useState('')
  const otherWrapper = useRef()
  const tl = useRef()


  // component to render plates
  const PlatesRender = () => {
    console.log(currentPlates)
    return (
      <>
        {currentPlates.data.length !== 0 ? currentPlates.data.map((el, index) => {
          return (
            <Card
              
              el={el}
            />
          )
        }): <div className='emptyTextBruh'>empty</div>}
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
    <div className="otherRenderer" ref={otherWrapper}>
      {!currentPlates.loading && currentPlates.error === ''? (
        <PlatesRender />
      ) : (
        <LoadingEmoji />
      )}
      {/* <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creemsdf sdfsd fsdfj kjsdfhu sdhfu dshufh sdkufhsdkjfnsdkufb dsfbgsdf sjdfbsdfhk dsj"
        category="dishes"
      />
      <Card
        title="Shchedryk"
        subText="Ukrainian Cristmas song"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="dishes"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="dishes"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="dishes"
      /> */}
    </div>
  )
}

export default OtherRenderer
