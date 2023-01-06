import { FETCH_SUCCESS, FETCH_ERROR } from './fetchOtherCategoryConst'

const initialState = {
  loading: true,
  data: {data:[{"articleId":1,"type":"file","region":"hmelnytsk","subText":"About Bohdan Khmelnytsky","title":"About Bohdan Khmelnytsky","category":"People"},{"articleId":2,"type":"file","region":"Kyiv","subText":"About Ivan Mazepa","title":"About Ivan Mazepa","category":"People"}]},
  error: '',
}

const fetchOtherCategory = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case FETCH_ERROR:
        return {
            ...state,
            loading: false,
            data:{},
            error: "something with fetchOtherCategory"
        }
    default:
      return state
  }
}

export default fetchOtherCategory;
