
const initialState = {
  // categories: ['history', 'people', 'culture', 'documents', 'science'],
  // categories_uk: ['історія', 'люди', 'культура', 'документи', 'наука'],
  // '1': ['all', 'history', 'people', 'dishes', 'music', 'documents', 'science'],
  // '2': ['всі', 'історія', 'люди', 'страви', 'музика', 'документи', 'наука'],
  // '1': ['all', 'history', 'people', 'dishes', 'music', 'science'],
  '0': ['all', 'history', 'people', 'dishes', 'music', 'science'],
  '1': ['всі', 'історія', 'люди', 'страви', 'музика', 'наука'],
  
  corelate: (p_category, p_lang_id) => {
    return initialState['0'][initialState[p_lang_id].indexOf(p_category)]
  },
  corelateToCurrentLang: (p_category, p_lang_id) => {
    return initialState[p_lang_id][initialState['0'].indexOf(p_category)]
  },
}

const categoriesInfoBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default categoriesInfoBlockReducer
