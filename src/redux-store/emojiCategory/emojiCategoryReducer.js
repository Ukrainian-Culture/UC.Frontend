const initialState = {
    emoji: {
        "history": "📜",
        "people": "🙋‍♂️",
        "dishes": "🥟",
        "music": "🎼",
        "documents": "📚",
        "science": "⚗️"
    }
}

const emojiCategoryReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default emojiCategoryReducer;