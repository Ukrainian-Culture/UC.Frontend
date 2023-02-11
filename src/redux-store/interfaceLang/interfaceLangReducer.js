const initialState = {

    '0': {
        map: "Map",
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
        search: "search",
        create_an_account: "Create an account",
        already_have_an_account: "Already have an account?",
        signin: "Sign in",
        email: "email",
        password: "password",
        confirm_password: "confirm password",
        create: "Create"

    },
    '1': {
        map: "Карта",
        explore: "Довідник",
        profile: "Профіль",
        login: "Вхід",
        registration: "Реєстрація",
        back: "назад",
        peopleOnline: "Користувачі онлайн",
        nationalMonuments: "Національні монументи",
        usencoHerritage: "Спадщина ЮНЕСКО",
        ukrainePopulation: "Популяція України",
        logout: "вихід",
        search: "пошук",
        create_an_account: "Створити акаунт",
        already_have_an_account: "Уже є акаунт?",
        signin: "Вхід",
        email: "електронна пошта",
        password: "пароль",
        confirm_password: "повторіть пароль",
        create: "Створити"
    }
}

const interfaceLangReducer = (state = initialState, action) => {
    return { ...state }
}

export default interfaceLangReducer