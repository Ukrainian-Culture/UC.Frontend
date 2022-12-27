import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'
import Card from '../../../../card/Card'
import '../otherRenderer/otherRenderer.scss'

function OtherRenderer() {
  const otherWrapper = useRef()
  const tl = useRef()

  useEffect(() => {
    // animation with gsap
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()

      tl.current = gsap.timeline().from('.cardBlock', {
        y:-10,
        opacity: 0.6,
        stagger: 0.04,
      })
    }, otherWrapper)
    return () => ctx.revert()
  }, [])

  return (
    <div className="otherRenderer" ref={otherWrapper}>
      {/* otherRenderer */}
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
      <Card
        title="Ukrainian borsch"
        subText="Ukrainian dumplings made from potato and wheet dought with creem"
        category="music"
      />
    </div>
  )
}

export default OtherRenderer
