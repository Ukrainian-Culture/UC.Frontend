const initialState = {
  '0': {
    map: 'Map',
    explore: 'Explore',
    profile: 'Profile',
    login: 'Login',
    registration: 'Sign up',
    back: 'back',
    peopleOnline: 'Users online',
    nationalMonuments: 'National monuments',
    usencoHerritage: 'UNESCO herritage',
    ukrainePopulation: 'Ukraine population',
    logout: 'logout',
    create_an_account: 'Create an account',
    already_have_an_account: 'Already have an account?',
    signin: 'Sign in',
    email: 'email',
    password: 'password',
    confirm_password: 'confirm password',
    create: 'Create',
    your_email: 'your email',
    subscription: 'Subscription',
    add_subscription: 'add subscription',

    signIn_account: 'Sign in',
    new_user: "New user?",
  },
  '1': {
    map: 'Карта',
    explore: 'Довідник',
    profile: 'Профіль',
    login: 'Вхід',
    registration: 'Реєстрація',
    back: 'назад',
    peopleOnline: 'Користувачі онлайн',
    nationalMonuments: 'Національні монументи',
    usencoHerritage: 'Спадщина ЮНЕСКО',
    ukrainePopulation: 'Популяція України',
    logout: 'вихід',
    create_an_account: 'Створити акаунт',
    already_have_an_account: 'Уже є акаунт?',
    signin: 'Вхід',
    email: 'електронна пошта',
    password: 'пароль',
    confirm_password: 'повторіть пароль',
    create: 'Створити',
    your_email: 'ваша пошта',
    subscription: 'Підписка',
    add_subscription: 'додати підписку',

    signIn_account: 'Ввійти в акаунт',
    new_user: "Новий користувач?",
  },
}

const interfaceLangReducer = (state = initialState, action) => {
  return { ...state }
}

export default interfaceLangReducer
