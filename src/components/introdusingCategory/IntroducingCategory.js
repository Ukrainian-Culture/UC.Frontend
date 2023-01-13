import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import '../introdusingCategory/introducingCategory.scss'
import ScrollCategory from '../scrollCategory/ScrollCategory'

// gsap.registerPlugin(ScrollTrigger)

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

// =========================================================

// function which count amount of u letter in line
function getAmountOfU(line) {
  let amount = 0
  for (let i = 0; i < line.length; i++) {
    if (line[i].toUpperCase() === 'U') {
      amount++
    }
  }
  return amount
}

function IntroducingCategory() {
  // const [bigText, setBigText] = useState('UUCCC')
  const bigText = useRef()

  useEffect(() => {
    const intervalTime = 1000
    const maxAmountOfLetters = 5

    const interval = setInterval(() => {
      const count = getRandomInt(0, maxAmountOfLetters)
      // amount of u letter in line
      const current_u = getAmountOfU(bigText.current.innerText)
      //amount of nessesary changes
      const nessesaryCanges = count - current_u
      // time for one change of letter per interval
      const timeForOne = intervalTime / Math.abs(nessesaryCanges)

      // console.log(`============= ${nessesaryCanges} !! ${current_u}`)
      for (let i = 0; i < Math.abs(nessesaryCanges); i++) {
        setTimeout(() => {
          let minus = 1
          if (nessesaryCanges > 0) minus = -1

          let u_buf_amount = Math.abs(nessesaryCanges) + -i + 1
          let u_buf = `${'U'.repeat(u_buf_amount)}`
          let c_buf_amount = Math.abs(maxAmountOfLetters - u_buf_amount)
          let c_buf = `${'U'.repeat(c_buf_amount)}`

          bigText.current.innerText = `${u_buf}`

          // console.log(`${i * timeForOne} || ${u_buf_amount}`)
        }, i * timeForOne)
      }
    }, intervalTime)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="introducingCategory">
      <div className='introducingCategory_wrapper'>
        <div className="introducingCategory_bigText_u introducingCategory_bigText" ref={bigText}>
          UU
        </div>
        <div className="introducingCategory_bigText_c introducingCategory_bigText">
          CCC
        </div>
      </div>
      <div className="introducingCategory_scrollCategories">
        <ScrollCategory />
        <ScrollCategory />
      </div>
    </div>
  )
}

export default IntroducingCategory
