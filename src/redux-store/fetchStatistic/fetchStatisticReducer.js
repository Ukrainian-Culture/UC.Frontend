import {
  FETCH_STATISTIC_ERROR,
  FETCH_STATISTIC_SUCCESS,
} from './fetchStatisticConst'

const initialState = {
  loading: true,
  data: {
    ukrainePopulation: 42352355,
    unescoHeritage: 24,
    populationOfRegions: [
      {
        key: 'Донецька',
        value: 9400,
      },
      {
        key: 'Дніпропетровська',
        value: 6500,
      },
      {
        key: 'м.Київ',
        value: 952300,
      },
      {
        key: 'Харківська',
        value: 599000,
      },
      {
        key: 'Львівська',
        value: 78100,
      },
    ],
    monuments: 532,
  },
  error: '',
}

const fetchStatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATISTIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case FETCH_STATISTIC_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: 'error in fetchStatisticReducer',
      }
    default:
      return state
  }
}

export default fetchStatisticReducer
