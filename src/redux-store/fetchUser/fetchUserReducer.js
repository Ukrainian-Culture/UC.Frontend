import { FETCH_USER_SUCCESS } from './fetchUserConst'

const initialState = {
  loading: false,
  data: {
    role: 'user',
    startDate: [],
    endDate: [],
    daysAmount: 0,
  },
  error: '',
}

const FormatData = (payload) => {
  let t_daysAmount = payload.daysAmount

  const date = new Date()
  let t_startDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
  let t_endDate = [0, 0, 0]
  let addYear = 0
  let addMonth = 0
  let addDay = 0

  // spliting days number into days months years
  while (t_daysAmount > 0) {
    if (t_daysAmount >= 365) {
      t_daysAmount = t_daysAmount - 365
      addYear++
    } else if (t_daysAmount >= 31) {
      t_daysAmount = t_daysAmount - 31
      addMonth++
    } else {
      addDay = t_daysAmount
      t_daysAmount = 0
    }
  }

  t_endDate[0] = t_startDate[0] + addDay
  t_endDate[1] = t_startDate[1] + addMonth
  t_endDate[2] = t_startDate[2] + addYear

  // stacking days if 45 dsys === 1 month 14 days
  while (t_endDate[0] >= 31) {
    console.log('days cycle')
    if (t_endDate[0] > 31) {
      t_endDate[0] = t_endDate[0] - 31
      t_endDate[1]++
    }
  }

  // stacking month if 12 dsys 13 month === 12 days 1 month +1 year
  while (t_endDate[1] >= 12) {
    console.log('month cycle')
    if (t_endDate[1] > 12) {
      t_endDate[1] = t_endDate[1] - 12
      t_endDate[2]++
    }
  }

  return {
    startDate: t_startDate,
    endDate: t_endDate,
  }

}

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      

      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.payload, ...FormatData(action.payload)},
        error: '',
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.error,
      }
    default:
      return state
  }
}

export default fetchUserReducer