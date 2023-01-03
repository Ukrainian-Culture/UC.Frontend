// ['history', 'people', 'culture', 'documents', 'science']
const initialState = {
  // categories: ['history', 'people', 'culture', 'documents', 'science'],
  // categories_uk: ['історія', 'люди', 'культура', 'документи', 'наука'],
  "1":['history', 'people', 'culture', 'documents', 'science'],
  "2":['історія', 'люди', 'культура', 'документи', 'наука'],
  corelate: (p_category, p_lang_id)=>{
    return initialState["1"][initialState[p_lang_id].indexOf(p_category)]
  }
}

const categoriesInfoBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default categoriesInfoBlockReducer
