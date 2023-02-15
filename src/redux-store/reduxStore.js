import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import themeReducer from './themeState/themeReducer'
import sideHeightReducer from './sideHeight/sideHeightReducer'
import aboutOblastReducer from './aboutOblast/aboutOblastReducer'
import selectedOblastReducer from './selectedOblast/selectedOblastReducer'
import categoriesInfoBlockReducer from './categoriesInfoBlock/categoriesInfoBlockReducer'
import selectedCategoryReducer from './selectedCategory/selectedCategoryReducer'
import emojiCategoryReducer from './emojiCategory/emojiCategoryReducer'
import changeLanguageReducer from './changeLanguage/changeLanguageReducer'
import fetchExploreReducer from './fetchExplore/fetchExploreReducer'
import screenWidthReducer from './screenWidth/screenWidthReducer'
import fetchCategoryLocaleReducer from './fetchCategoryLocale/fetchCategoryLocaleReducer'
import startSettingsReducer from './startSettings/startSettingsReducer'
import fetchCultureReducer from './fetchCulture/fetchCultureReducer'
import fetchStatisticReducer from './fetchStatistic/fetchStatisticReducer'
import fetchHistoryReducer from './fetchHistory/fetchHistoryReducer'
import fetchPeopleReducer from './fetchOtherCategory/fetchPeople/fetchPeopleReducer'
import fetchDishesReducer from './fetchOtherCategory/fetchDishes/fetchDishesRducer'
import fetchMusicReducer from './fetchOtherCategory/fetchMusic/fetchMuzicReducer'
import fetchScienceReducer from './fetchOtherCategory/fetchScience/fetchScienceReducer'
import fetchArticleReducer from './fetchArticle/fetchArticleReducer'
import interfaceLangReducer from './interfaceLang/interfaceLangReducer'
import fetchOnlineReducer from './fetchUserOnline/fetchUserOnlineReducer'
import profileCategoryReducer from './profileCategory/profileCategoryReducer'
import fetchUserReducer from './fetchUser/fetchUserReducer'
import searchReducer from './search/searchReducer'

const rootReducer = combineReducers({
  interfaceLang: interfaceLangReducer,
  startSettings: startSettingsReducer,
  theme: themeReducer,
  sideHeight: sideHeightReducer,
  aboutOblast: aboutOblastReducer,
  selectedOblast: selectedOblastReducer,
  categoriesInfoBlock: categoriesInfoBlockReducer,
  selectedCategory: selectedCategoryReducer,
  emojiCategory: emojiCategoryReducer,
  changeLanguage: changeLanguageReducer,
  fetchArticle: fetchArticleReducer,
  fetchExplore: fetchExploreReducer,
  fetchHistory: fetchHistoryReducer,
  fetchPeople: fetchPeopleReducer,
  fetchDishes: fetchDishesReducer,
  fetchMusic: fetchMusicReducer,
  fetchScience: fetchScienceReducer,
  screenWidth: screenWidthReducer,
  categoryLocale: fetchCategoryLocaleReducer,
  culture: fetchCultureReducer,
  statistic: fetchStatisticReducer,
  userOnline: fetchOnlineReducer,
  profileCategory: profileCategoryReducer,
  user: fetchUserReducer,
  search: searchReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
