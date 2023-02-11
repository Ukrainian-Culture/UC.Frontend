const initialState = {
    emoji: {
        "search": "🔎",
        "history": "📜",
        "people": "🙋‍♂️",
        "dishes": "🥟",
        "music": "🎼",
        "documents": "📚",
        "science": "⚗️",
        "culture": "⚜️",
        "all": "📦"
    }
}

const emojiCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default emojiCategoryReducer;