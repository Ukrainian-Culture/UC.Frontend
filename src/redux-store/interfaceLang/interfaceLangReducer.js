const initialState = {
    
    '0':{
        map:"Map",
        explore: "Explore",
        profile: "Profile",
        login: "Login",
        registration: "Sign up",
        back: "back",
        peopleOnline: "Users online",
        nationalMonuments: "National monuments",
        usencoHerritage: "UNESCO herritage",
        ukrainePopulation: "Ukraine population",
        logout: "logout",
    },
    '1':{
        map:"Карта",
        explore: "Довідник",
        profile: "Профіль",
        login: "Вхід",
        registration: "Реєстрація",
        back: "назад",
        peopleOnline: "Користувачі онлайн",
        nationalMonuments: "Національні монументи",
        usencoHerritage: "Спадщина ЮНЕСКО",
        ukrainePopulation: "Популяція України",
        logout: "вихід"
    }
}

const interfaceLangReducer = (state = initialState, action) =>{
    return {...state}
}

export default interfaceLangReducer