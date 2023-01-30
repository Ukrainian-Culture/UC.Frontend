const initialState = {
    
    '0':{
        map:"Map",
        explore: "Explore",
        profile: "Profile",
        login: "Login",
        back: "back"
    },
    '1':{
        map:"Карта",
        explore: "Довідник",
        profile: "Профіль",
        login: "Вхід",
        back: "назад"
    }
}

const interfaceLangReducer = (state = initialState, action) =>{
    return {...state}
}

export default interfaceLangReducer