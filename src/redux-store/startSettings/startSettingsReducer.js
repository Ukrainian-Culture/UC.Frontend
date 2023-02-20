import { STATISTIC_TRIGGER } from './startSettingsReducerConst'

const initialState = {
  domain: 'https://ucbackend.azurewebsites.net',
  // domain: "https://localhost:7219",
  userRequestDomain: 'https://localhost:7219',
  // userRequestDomain: "https://ucbackend.azurewebsites.net",
  validation: false,

  enterStatistic: false
}

const startSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATISTIC_TRIGGER:
      return {
        ...state,
        enterStatistic: action.payload
      }
    default:
      return state
  }
}

export default startSettingsReducer
