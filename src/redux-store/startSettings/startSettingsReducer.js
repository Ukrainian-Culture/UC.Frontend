import { CHANGE_THEME, STATISTIC_TRIGGER } from './startSettingsReducerConst'

const initialState = {
  // domain: "https://localhost:7219",
  // userRequestDomain: 'https://localhost:7219',
  // confirmDomain: 'https://localhost:7219',
  // emailNavLink: "http://localhost:3000/subscription",

  domain: 'https://ucbackend.azurewebsites.net',

  userRequestDomain: 'https://ucbackend.azurewebsites.net',

  confirmDomain: 'https://ucbackend.azurewebsites.net',

  emailNavLink: 'https://uculture.github.io/subscription',

  validation: true,

  enterStatistic: false,

  // theme: 'dark',
  theme: 'light',
}

const startSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATISTIC_TRIGGER:
      return {
        ...state,
        enterStatistic: action.payload,
      }
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}

export default startSettingsReducer
