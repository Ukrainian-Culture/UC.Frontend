const initialState = {
    category: {
        '0' : ['profile', 'history'],
        '1' : ['профіль', 'історія']
    },

    adminCategory:{
        '0': ['articles'],
        '1': ['статті']
    }
}

const profileCategoryReducer = (state = initialState, action) => {
    return state;
}

export default profileCategoryReducer;