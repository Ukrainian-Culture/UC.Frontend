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
    new_user: 'New user?',
    search: 'search',

    //subscription
    subscription: 'Subscription',
    search: 'search',
    history: 'history',
    download_f_a: 'download',
    full_article: 'full article',
    article_f_t: 'article',
    full_translation: 'full translation',
    article_f_as: 'article',
    full_access: 'full access',

    //footer
    d_a_d: 'Design and development',
    l_c_u: 'Lviv, Ukraine',
    about_us: 'About us',
    private_policy: 'Privacy Policy',
    t_a_c: 'Term & Conditions',
    g_2_off: 'Get 20% off',
    b_s_t_n: 'By subscribing to our newsletter',

    // userHistory
    empty: 'empty',
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
    search: 'пошук',
    signIn_account: 'Ввійти в акаунт',
    new_user: 'Новий користувач?',

    //subscription
    subscription: 'Підписка',
    search: 'пошук',
    history: 'історія',
    download_f_a: 'скачування',
    full_article: 'повної статті',
    article_f_t: 'переклад',
    full_translation: 'повної статті',
    article_f_as: 'повний доступ до',
    full_access: 'статті',

    //footer
    d_a_d: 'Дизайн і розробка',
    l_c_u: 'Львів, Україна',
    about_us: 'Про нас',
    private_policy: 'Політика конфіденційності',
    t_a_c: 'Умови користування',

    g_2_off: 'Отримай 20% знижку',
    b_s_t_n: 'Підписавшись на нашу розсилку',

    // userHistory
    empty: 'пусто',
  },
}

const interfaceLangReducer = (state = initialState, action) => {
  return { ...state }
}

export default interfaceLangReducer
