import { STATISTIC_TRIGGER } from './startSettingsReducerConst'

const initialState = {
  // domain: 'https://ucbackend.azurewebsites.net',
  domain: "https://localhost:7219",

  userRequestDomain: 'https://localhost:7219',
  // userRequestDomain: 'https://ucbackend.azurewebsites.net',

  confirmDomain: 'https://localhost:7219',
  // confirmDomain: "https://ucbackend.azurewebsites.net",

  emailNavLink: "http://localhost:3000/subscription",
  // emailNavLink: "https://uculture.github.io/subscription",

  validation: false,

  enterStatistic: false,
}

const startSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATISTIC_TRIGGER:
      return {
        ...state,
        enterStatistic: action.payload,
      }
    default:
      return state
  }
}

export default startSettingsReducer
