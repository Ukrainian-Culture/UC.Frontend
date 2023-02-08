const initialState = {

  user: {
    '0': ['profile', 'history'],
    '1': ['профіль', 'історія'],
  },

  admin: {
    '0': ['articles'],
    '1': ['статті'],
  },
}

const profileCategoryReducer = (state = initialState, action) => {
  return state
}

export default profileCategoryReducer
