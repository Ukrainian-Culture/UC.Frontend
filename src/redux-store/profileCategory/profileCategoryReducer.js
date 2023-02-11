const initialState = {

  user: {
    '0': ['profile', 'history'],
    '1': ['профіль', 'історія'],
  },

  admin: {
    '0': ['articles', 'mailing'],
    '1': ['статті', 'розсилка'],
  },
}

const profileCategoryReducer = (state = initialState, action) => {
  return state
}

export default profileCategoryReducer
