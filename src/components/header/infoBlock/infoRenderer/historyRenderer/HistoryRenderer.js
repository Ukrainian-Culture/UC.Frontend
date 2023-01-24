import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import '../historyRenderer/historyRenderer.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoadingEmoji from '../../../../loadingPage/loadingEmoji/LoadingEmoji'

//==============================================

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function createTestJson(num) {
  let res = ''
  for (let i = 0; i < num; i++) {
    res += `{
        shortDescription: "${i + 1} some description",
        date: "0${getRandomInt(1, 9)}.0${getRandomInt(1, 9)}.${getRandomInt(
      1500,
      2022,
    )}"
    },`
  }
  console.log(res)
}

//==============================================

function HistoryRenderer() {
  const state = useSelector((state) => state)
  const aboutOblast = state.aboutOblast.aboutOblast
  const selectedOblast = state.selectedOblast.selectedOblast
  const history = state.fetchHistory
  const history_loading = state.fetchHistory.loading
  const history_data = state.fetchHistory.data
  // const history_error = state.fetchHistory.error

  // ---------------------------------

  // const test_json = [
  //   {
  //     shortDescription:
  //       '1 some sdfsdf sdf sdf sdf esdsdf sdf sdf sdf sdf description sdsdfdsdfsdfsds dfsdfd fsdfsfsdfsdfsdfsdfsdfffffffff sdf sdf sdf dfsd sdfsdfsdf ',
  //     date: '04.02.1574',
  //   },
  //   {
  //     shortDescription: '2 some description',
  //     date: '08.04.1851',
  //   },
  //   {
  //     shortDescription: '3 some description',
  //     date: '06.08.1721',
  //   },
  //   {
  //     shortDescription: '4 some description',
  //     date: '01.02.1702',
  //   },
  //   {
  //     shortDescription: '5 some description',
  //     date: '05.07.1555',
  //   },
  //   {
  //     shortDescription: '6 some description',
  //     date: '07.01.1953',
  //   },
  //   {
  //     shortDescription: '7 some description',
  //     date: '04.04.1743',
  //   },
  //   {
  //     shortDescription: '8 some description',
  //     date: '05.06.1795',
  //   },
  //   {
  //     shortDescription: '9 some description',
  //     date: '05.05.1873',
  //   },
  //   {
  //     shortDescription: '10 some description',
  //     date: '03.08.1515',
  //   },
  //   {
  //     shortDescription: '11 some description',
  //     date: '07.02.1919',
  //   },
  //   {
  //     shortDescription: '12 some description',
  //     date: '06.02.1840',
  //   },
  //   {
  //     shortDescription: '13 some description',
  //     date: '04.06.1656',
  //   },
  //   {
  //     shortDescription: '14 some description',
  //     date: '02.06.1645',
  //   },
  //   {
  //     shortDescription: '15 some description',
  //     date: '01.06.1811',
  //   },
  //   {
  //     shortDescription: '16 some description',
  //     date: '05.01.1973',
  //   },
  //   {
  //     shortDescription: '17 some description',
  //     date: '07.07.2020',
  //   },
  //   {
  //     shortDescription: '18 some description',
  //     date: '06.03.2017',
  //   },
  //   {
  //     shortDescription: '19 some description',
  //     date: '08.08.1762',
  //   },
  //   {
  //     shortDescription: '20 some description',
  //     date: '02.08.1964',
  //   },
  //   {
  //     shortDescription: '21 some description',
  //     date: '06.03.1956',
  //   },
  //   {
  //     shortDescription: '22 some description',
  //     date: '01.03.1550',
  //   },
  //   {
  //     shortDescription: '23 some description',
  //     date: '08.08.1754',
  //   },
  //   {
  //     shortDescription: '24 some description',
  //     date: '01.02.1717',
  //   },
  //   {
  //     shortDescription: '25 some description',
  //     date: '01.07.1736',
  //   },
  //   {
  //     shortDescription: '26 some description',
  //     date: '07.07.2017',
  //   },
  //   {
  //     shortDescription: '27 some description',
  //     date: '07.04.1735',
  //   },
  //   {
  //     shortDescription: '28 some description',
  //     date: '04.01.1673',
  //   },
  //   {
  //     shortDescription: '29 some description',
  //     date: '01.07.1947',
  //   },
  //   {
  //     shortDescription: '30 some description',
  //     date: '03.03.1745',
  //   },
  //   {
  //     shortDescription: '31 some description',
  //     date: '02.08.1925',
  //   },
  //   {
  //     shortDescription: '32 some description',
  //     date: '01.05.1530',
  //   },
  //   {
  //     shortDescription: '33 some description',
  //     date: '04.03.1527',
  //   },
  //   {
  //     shortDescription: '34 some description',
  //     date: '04.08.1694',
  //   },
  //   {
  //     shortDescription: '35 some description',
  //     date: '07.01.1593',
  //   },
  //   {
  //     shortDescription: '36 some description',
  //     date: '04.06.2004',
  //   },
  //   {
  //     shortDescription: '37 some description',
  //     date: '05.05.1783',
  //   },
  //   {
  //     shortDescription: '38 some description',
  //     date: '02.01.1511',
  //   },
  //   {
  //     shortDescription: '39 some description',
  //     date: '04.06.1610',
  //   },
  //   {
  //     shortDescription: '40 some description',
  //     date: '05.05.1890',
  //   },
  // ]

  function getDay(p_string) {
    return p_string.slice(0, 2)
  }
  function getMonth(p_string) {
    return p_string.slice(3, 5)
  }
  function getYear(p_string) {
    return p_string.slice(6, 10)
  }

  // return sorted by year array with elements in json format
  function sortByDate(p_arr) {
    let arr = [...p_arr]

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (parseInt(getYear(arr[i].date)) > parseInt(getYear(arr[j].date))) {
          let temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
  }

  // returns array of json elements with fieds name(stand out for year period) and list(contain index of elements from period <name>)
  function makeGroupsByYear(p_arr) {
    // template of array element
    const layout = () => {
      return { year: '', list: [] }
    }
    let arr = [layout()]
    let prev = getYear(p_arr[0].date).slice(0, 2)
    let index = 0

    //fill first element
    arr[index].year = prev
    arr[index].list.push(0)

    for (let i = 1; i < p_arr.length; i++) {
      if (prev == getYear(p_arr[i].date).slice(0, 2)) {
        arr[index].list = [...arr[index].list, i]
      } else {
        index++
        arr.push(layout())
        arr[index].year = getYear(p_arr[i].date).slice(0, 2)
        arr[index].list.push(i)
      }
      prev = getYear(p_arr[i].date).slice(0, 2)
    }

    // console.log(arr)
    // arr.forEach(el=>{
    //     console.log(`%%% ${el.year} %%%`)
    //     el.list.forEach(e=>{
    //         console.log( getYear(p_arr[e].date))
    //     })
    //     console.log("===============")
    // })

    return arr
  }

  const historyWrapper = useRef()
  const tl = useRef() // timeline for gsap animation
  const tl_2 = useRef() // another timeline for gsap animation
  const tl_enter = useRef() // another timeline for history lines animation on enter hover
  const tl_exit = useRef() // another timeline for history lines animation on exit hover
  const moveLineToRight = 4 // distance of movind history info to right
  // const [isHistoryAnimationEnd, setIsHistoryAnimationEnd] = useState(false)

  // element which render all history lines
  function FormingHistoryOrder() {
    let arr = sortByDate(history_data)
    let grouped_arr = makeGroupsByYear(arr)

    // function which calls when mouse hover enter history line
    function animateEnterHover(e) {
      const ctx = gsap.context(() => {
        tl_enter.current = gsap.timeline().to(e.target, {
          x: moveLineToRight,
          delay: 0.1,
          duration: 0.5,
        })
      })
      return () => ctx.revert()
    }

    // function which calls when mouse hover leave history line
    function animateExitHover(e) {
      const ctx = gsap.context(() => {
        tl_enter.current.reverse()
      })
      return () => ctx.revert()
    }

    useEffect(() => {
      // animation with gsap
      const ctx = gsap.context(() => {
        // console.log('creating timeline')
        tl.current && tl.current.progress(0).kill()
        tl_2.current && tl_2.current.progress(0).kill()

        tl.current = gsap
          .timeline()
          .from('.historyRenderer_wrapper_section_sideContainer', {
            scaleY: 0,
            transformOrigin: 'top',
          })
          .from(
            '.historyRenderer_wrapper_section_mainContainer_sub_subWrap_subLine',
            {
              scaleX: 0,
              transformOrigin: 'left',
              stagger: 0.04,
            },
            '-=0.5',
          )
          .from(
            '.historyRenderer_wrapper_section_mainContainer_wrap',

            {
              x: -30,
              stagger: 0.03,
              opacity: 0,
            },
            '',
          )

        tl_2.current = gsap.timeline().from('.historyRenderer_wrapper_year', {
          opacity: 0.5,
          stagger: 0.04,
        })
      }, historyWrapper)
      return () => ctx.revert()
    }, [])
    return (
      <>
        {grouped_arr.map((el, index) => {
          return (
            <div key={`fho_${index}`} className="historyRenderer_wrapper">
              <div className="historyRenderer_wrapper_year">
                <div className="historyRenderer_wrapper_year_text">{`${el.year}00`}</div>
              </div>

              <div className="historyRenderer_wrapper_section">
                <div className="historyRenderer_wrapper_section_sideContainer"></div>

                <div className="historyRenderer_wrapper_section_mainContainer">
                  <div className="historyRenderer_wrapper_section_mainContainer_sub">
                    <div className="historyRenderer_wrapper_section_mainContainer_sub_subWrap"></div>
                  </div>

                  {el.list.map((el_2, index_2) => {
                    return (
                      <div
                        className="historyRenderer_wrapper_section_mainContainer_sub"
                        key={`fho_3_${index_2}`}
                      >
                        <div className="historyRenderer_wrapper_section_mainContainer_sub_subWrap">
                          <div className="historyRenderer_wrapper_section_mainContainer_sub_subWrap_subLine"></div>
                        </div>

                        <Link
                          className="historyRenderer_wrapper_section_mainContainer_wrap"
                          to={`/article/${arr[el_2].date}`}
                          state={arr[el_2]}
                        >
                          <div
                            className="historyRenderer_wrapper_section_mainContainer_wrap_sub_subText"
                            onMouseEnter={(e) => animateEnterHover(e)}
                            onMouseLeave={(e) => animateExitHover(e)}
                          >
                            {`${arr[el_2].shortDescription} ${arr[el_2].date}`}
                          </div>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  // if(history_data.length !== 0 && history_data[0].region === aboutOblast[selectedOblast]){

  // }
  // console.log(aboutOblast[selectedOblast]['en_name'])

  return (
    <div className="historyRenderer" ref={historyWrapper}>
      {!history_loading && history_data.length !== 0 && history_data[0].region === aboutOblast[selectedOblast].en_name? (
        <FormingHistoryOrder />
      ) : (
        <LoadingEmoji />
      )}
    </div>
  )
}

export default HistoryRenderer
