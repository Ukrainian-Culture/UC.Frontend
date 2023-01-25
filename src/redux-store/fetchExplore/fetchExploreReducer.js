// //==============================================

import { FETCH_EXPLORE_ERROR, FETCH_EXPLORE_SUCCESS } from './fetchExploreConst'

// function getRandomInt(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
//   }

//   function createTestJson(num) {
//     const cat_arr = [
//       'history',
//       'people',
//       'dishes',
//       'music',
//       'documents',
//       'science',
//     ]
//     let res = ''
//     for (let i = 0; i < num; i++) {
//       res += `{
//           title: "${i + 1} title",
//           category: "${cat_arr[getRandomInt(0, cat_arr.length)]}",
//           shortDesc: "${i + 1} some description",
//           date: "0${getRandomInt(1, 9)}.0${getRandomInt(1, 9)}.${getRandomInt(
//         1500,
//         2022,
//       )}"
//       },`
//     }
//     console.log(res)
//   }

//   //==============================================

// const initialState = {
//   loading: true,
//   arr: [
//     {
//       title: '1 title',
//       category: 'music',
//       shortDesc: '1 some description',
//       date: '02.06.1603',
//     },
//     {
//       title: '2 title',
//       category: 'dishes',
//       shortDesc: '2 some description',
//       date: '03.05.2018',
//     },
//     {
//       title: '3 title',
//       category: 'documents',
//       shortDesc: '3 some description',
//       date: '04.02.1824',
//     },
//     {
//       title: '4 title',
//       category: 'science',
//       shortDesc: '4 some description',
//       date: '03.08.1865',
//     },
//     {
//       title: '5 title',
//       category: 'history',
//       shortDesc: '5 some description',
//       date: '02.01.1687',
//     },
//     {
//       title: '6 title',
//       category: 'science',
//       shortDesc: '6 some description',
//       date: '03.07.1691',
//     },
//     {
//       title: '7 title',
//       category: 'dishes',
//       shortDesc: '7 some description',
//       date: '08.01.1911',
//     },
//     {
//       title: '8 title',
//       category: 'science',
//       shortDesc: '8 some description',
//       date: '08.01.1972',
//     },
//     {
//       title: '9 title',
//       category: 'documents',
//       shortDesc: '9 some description',
//       date: '02.03.1531',
//     },
//     {
//       title: '10 title',
//       category: 'music',
//       shortDesc: '10 some description',
//       date: '07.08.1562',
//     },
//     {
//       title: '11 title',
//       category: 'people',
//       shortDesc: '11 some description',
//       date: '02.08.1893',
//     },
//     {
//       title: '12 title',
//       category: 'documents',
//       shortDesc: '12 some description',
//       date: '08.05.1719',
//     },
//     {
//       title: '13 title',
//       category: 'music',
//       shortDesc: '13 some description',
//       date: '02.02.1511',
//     },
//     {
//       title: '14 title',
//       category: 'music',
//       shortDesc: '14 some description',
//       date: '03.08.1530',
//     },
//     {
//       title: '15 title',
//       category: 'documents',
//       shortDesc: '15 some description',
//       date: '05.06.1996',
//     },
//     {
//       title: '16 title',
//       category: 'science',
//       shortDesc: '16 some description',
//       date: '08.07.1798',
//     },
//     {
//       title: '17 title',
//       category: 'science',
//       shortDesc: '17 some description',
//       date: '06.01.1956',
//     },
//     {
//       title: '18 title',
//       category: 'documents',
//       shortDesc: '18 some description',
//       date: '01.06.1843',
//     },
//     {
//       title: '19 title',
//       category: 'music',
//       shortDesc: '19 some description',
//       date: '07.05.1919',
//     },
//     {
//       title: '20 title',
//       category: 'history',
//       shortDesc: '20 some description',
//       date: '04.08.1930',
//     },
//     {
//       title: '21 title',
//       category: 'history',
//       shortDesc: '21 some description',
//       date: '01.03.1591',
//     },
//     {
//       title: '22 title',
//       category: 'dishes',
//       shortDesc: '22 some description',
//       date: '01.05.1969',
//     },
//     {
//       title: '23 title',
//       category: 'history',
//       shortDesc: '23 some description',
//       date: '07.05.1721',
//     },
//     {
//       title: '24 title',
//       category: 'history',
//       shortDesc: '24 some description',
//       date: '07.03.1880',
//     },
//     {
//       title: '25 title',
//       category: 'science',
//       shortDesc: '25 some description',
//       date: '02.02.1870',
//     },
//     {
//       title: '26 title',
//       category: 'documents',
//       shortDesc: '26 some description',
//       date: '08.07.2006',
//     },
//     {
//       title: '27 title',
//       category: 'science',
//       shortDesc: '27 some description',
//       date: '04.08.1522',
//     },
//     {
//       title: '28 title',
//       category: 'dishes',
//       shortDesc: '28 some description',
//       date: '04.04.1518',
//     },
//     {
//       title: '29 title',
//       category: 'people',
//       shortDesc: '29 some description',
//       date: '02.03.1523',
//     },
//     {
//       title: '30 title',
//       category: 'people',
//       shortDesc: '30 some description',
//       date: '07.08.1512',
//     },
//     {
//       title: '31 title',
//       category: 'people',
//       shortDesc: '31 some description',
//       date: '05.03.1752',
//     },
//     {
//       title: '32 title',
//       category: 'dishes',
//       shortDesc: '32 some description',
//       date: '01.02.1997',
//     },
//     {
//       title: '33 title',
//       category: 'science',
//       shortDesc: '33 some description',
//       date: '08.08.1747',
//     },
//     {
//       title: '34 title',
//       category: 'people',
//       shortDesc: '34 some description',
//       date: '06.01.1587',
//     },
//     {
//       title: '35 title',
//       category: 'dishes',
//       shortDesc: '35 some description',
//       date: '05.04.1520',
//     },
//     {
//       title: '36 title',
//       category: 'people',
//       shortDesc: '36 some description',
//       date: '05.06.1818',
//     },
//     {
//       title: '37 title',
//       category: 'documents',
//       shortDesc: '37 some description',
//       date: '08.05.1953',
//     },
//     {
//       title: '38 title',
//       category: 'documents',
//       shortDesc: '38 some description',
//       date: '06.07.1998',
//     },
//     {
//       title: '39 title',
//       category: 'people',
//       shortDesc: '39 some description',
//       date: '01.02.1684',
//     },
//     {
//       title: '40 title',
//       category: 'history',
//       shortDesc: '40 some description',
//       date: '08.02.1501',
//     },
//   ],
//   error: '',
// }

const initialState = {
  loading: true,
  data: [],
  error: ''
}

const fetchExploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPLORE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case FETCH_EXPLORE_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: `${action.error}`,
      }
    default:
      return state
  }
}

export default fetchExploreReducer
