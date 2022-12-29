const initialState = {
  categories: ['history', 'people', 'culture', 'documents', 'science'],
  categories_uk: ['історія', 'люди', 'культура', 'документи', 'наука'],
  corelation: {
    'історія': 'history',
    'люди': 'people',
    'культура': 'culture',
    'документи': 'documents',
    'наука': 'science',
  },
}

const categoriesInfoBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default categoriesInfoBlockReducer
