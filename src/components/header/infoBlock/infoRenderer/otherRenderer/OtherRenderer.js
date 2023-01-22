import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'
import Card from '../../../../card/Card'
import '../otherRenderer/otherRenderer.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'

function OtherRenderer() {
  const store = useSelector((state) => state)
  // -----------------------------------------
  // const [platesArr, setPlatesArr] = useState(store.fetchOtherCategory.data.data)
  const [platesArr, setPlatesArr] = useState([{"articleId":1,"type":"file","region":"hmelnytsk","subText":"About Bohdan Khmelnytsky","title":"About Bohdan Khmelnytsky","category":"People"},{"articleId":2,"type":"file","region":"Kyiv","subText":"About Ivan Mazepa","title":"About Ivan Mazepa","category":"People"}])
  const otherWrapper = useRef()
  const tl = useRef()

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
      {/* otherRenderer */}
      {platesArr.map((el, index) => {
        return (
          <Card
            key={`othReC_${index}`}
            title={el.title}
            subText={el.subText}
            category={el.category.toLowerCase()}
          />
        )
      })}
      <Card
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
      />
    </div>
  )
}

export default OtherRenderer
