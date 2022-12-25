import React from 'react'
import { useEffect } from 'react'
import '../historyRenderer/historyRenderer.scss'

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
        shortDesc: "${i + 1} some description",
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
  const test_json = [
    {
      shortDesc: '1 some description',
      date: '04.02.1574',
    },
    {
      shortDesc: '2 some description',
      date: '08.04.1851',
    },
    {
      shortDesc: '3 some description',
      date: '06.08.1721',
    },
    {
      shortDesc: '4 some description',
      date: '01.02.1702',
    },
    {
      shortDesc: '5 some description',
      date: '05.07.1555',
    },
    {
      shortDesc: '6 some description',
      date: '07.01.1953',
    },
    {
      shortDesc: '7 some description',
      date: '04.04.1743',
    },
    {
      shortDesc: '8 some description',
      date: '05.06.1795',
    },
    {
      shortDesc: '9 some description',
      date: '05.05.1873',
    },
    {
      shortDesc: '10 some description',
      date: '03.08.1515',
    },
    {
      shortDesc: '11 some description',
      date: '07.02.1919',
    },
    {
      shortDesc: '12 some description',
      date: '06.02.1840',
    },
    {
      shortDesc: '13 some description',
      date: '04.06.1656',
    },
    {
      shortDesc: '14 some description',
      date: '02.06.1645',
    },
    {
      shortDesc: '15 some description',
      date: '01.06.1811',
    },
    {
      shortDesc: '16 some description',
      date: '05.01.1973',
    },
    {
      shortDesc: '17 some description',
      date: '07.07.2020',
    },
    {
      shortDesc: '18 some description',
      date: '06.03.2017',
    },
    {
      shortDesc: '19 some description',
      date: '08.08.1762',
    },
    {
      shortDesc: '20 some description',
      date: '02.08.1964',
    },
    {
      shortDesc: '21 some description',
      date: '06.03.1956',
    },
    {
      shortDesc: '22 some description',
      date: '01.03.1550',
    },
    {
      shortDesc: '23 some description',
      date: '08.08.1754',
    },
    {
      shortDesc: '24 some description',
      date: '01.02.1717',
    },
    {
      shortDesc: '25 some description',
      date: '01.07.1736',
    },
    {
      shortDesc: '26 some description',
      date: '07.07.2017',
    },
    {
      shortDesc: '27 some description',
      date: '07.04.1735',
    },
    {
      shortDesc: '28 some description',
      date: '04.01.1673',
    },
    {
      shortDesc: '29 some description',
      date: '01.07.1947',
    },
    {
      shortDesc: '30 some description',
      date: '03.03.1745',
    },
    {
      shortDesc: '31 some description',
      date: '02.08.1925',
    },
    {
      shortDesc: '32 some description',
      date: '01.05.1530',
    },
    {
      shortDesc: '33 some description',
      date: '04.03.1527',
    },
    {
      shortDesc: '34 some description',
      date: '04.08.1694',
    },
    {
      shortDesc: '35 some description',
      date: '07.01.1593',
    },
    {
      shortDesc: '36 some description',
      date: '04.06.2004',
    },
    {
      shortDesc: '37 some description',
      date: '05.05.1783',
    },
    {
      shortDesc: '38 some description',
      date: '02.01.1511',
    },
    {
      shortDesc: '39 some description',
      date: '04.06.1610',
    },
    {
      shortDesc: '40 some description',
      date: '05.05.1890',
    },
  ]

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
        if (parseInt(getYear(arr[i].date)) < parseInt(getYear(arr[j].date))) {
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

  function FormingHistoryOrder() {
    let arr = sortByDate(test_json)
    let grouped_arr = makeGroupsByYear(arr)

    return (
      <>
        {grouped_arr.map((el, index) => {
          return (
            <div key={`fho_${index}`}>
              <div key={`fho_2_${index}`}>{`${el.year}00`}</div>
              
              {el.list.map((el_2, index_2) => {
                return (
                  <div
                    key={`fho_3_${index_2}`}
                  >{`${arr[el_2].shortDesc} ${arr[el_2].date}`}</div>
                )
              })}
              <div>=====================</div>
            </div>
          )
        })}
      </>
    )
  }

  //   useEffect(() => {
  //     createTestJson(40)
  //   }, [])

  return (
    <div className="historyRenderer">
      HistoryRenderer
      <FormingHistoryOrder />
    </div>
  )
}

export default HistoryRenderer
